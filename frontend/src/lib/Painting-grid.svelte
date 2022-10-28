<script>
  import { onMount } from "svelte";
  import env from "../../env";
  let allPaintings, paintings, filterState, response;

  async function getPaintings() {
    const res = await fetch(env.API_BASE_URL + "paintings");
    const json = await res.json();
    if (res.ok) {
      allPaintings = json.data;
      paintings = allPaintings;
      setFilterState("avalible");
      return json;
    } else {
      throw new Error(json);
    }
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

  allPaintings = getPaintings();

  // onMount(() => {
  //   getPaintings();
  // });
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
    {#await allPaintings}
      Waiting...
    {:then fetched}
      {#each paintings as painting}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
          alt=""
        />
      {/each}
    {/await}
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
