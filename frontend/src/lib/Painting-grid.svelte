<script>
  import { onMount } from "svelte";
  import env from "../../env";
  import { Router, Link } from "svelte-routing";
  let allPaintings, paintings, filterState, response;

  async function getPaintings() {
    const res = await fetch(env.API_BASE_URL + "paintings?populate=*");
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

  export let url = "";
</script>

<Router {url}>
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
          <Link to="/malerier/{painting.id}">
            <img
              class="paintingImage"
              src={env.ROOT_BACKEND_URL +
                painting.attributes.image.data.attributes.url}
              alt=""
            />
          </Link>
        {/each}
      {/await}
    </div>
  </div>
</Router>

<style>
  .paintingsContainer {
    display: flex;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;
  }

  .paintingImage {
    height: 400px;
  }
  button.selected {
    text-decoration: underline;
  }
</style>
