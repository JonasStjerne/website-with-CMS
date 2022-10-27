<script>
  import { onMount } from "svelte";
  import env from "../../env";
  let allPaintings;
  let paintings;
  let filterState;

  async function getPaintings() {
    const responseJSON = await fetch(env.API_BASE_URL + "paintings");
    const response = await responseJSON.json();
    allPaintings = response.data;
    paintings = allPaintings;
    setFilterState("avalible");
  }

  function setFilterState(state) {
    if (state == "all") {
      paintings = allPaintings;
      filterState = "all";
    } else if ((state = "avalible")) {
      paintings = allPaintings.filter((e) => !e.attributes.sold);
      filterState = "avalible";
    }
  }

  onMount(() => {
    getPaintings();
  });
</script>

<div>
  <button
    on:click={() => setFilterState("avalible")}
    class={filterState == "avalible" ? "selected" : ""}>Til Salg</button
  >
  <button
    on:click={() => setFilterState("all")}
    class={filterState == "all" ? "selected" : ""}>Alle</button
  >
  <div class="paintingsContainer">
    {#if paintings}
      {#each paintings as painting}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
          alt=""
        />
      {/each}
    {/if}
  </div>
</div>

<style>
  .paintingsContainer {
    display: flex;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;
  }

  .paintingsContainer > img {
    height: 400px;
  }
  button.selected {
    text-decoration: underline;
  }
</style>
