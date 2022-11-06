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
  <div class="container">
    <div>
      <button
        on:click={() => setFilterState("avalible")}
        class={filterState == "avalible" ? "selected" : ""}>Til Salg</button
      >
      <button
        on:click={() => setFilterState("all")}
        class={filterState == "all" ? "selected" : ""}>Alle</button
      >
    </div>
    <div class="paintingsContainer">
      {#await allPaintings}
        <div class="loader" />
      {:then fetched}
        {#each paintings as painting}
          <Link to="/malerier/{painting.id}">
            <img
              class="paintingImage"
              src={painting.attributes.image.data.attributes.url}
              alt=""
            />
          </Link>
        {/each}
      {/await}
    </div>
  </div>
</Router>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
  }

  .paintingsContainer {
    display: flex;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;
  }

  .paintingImage {
    max-width: 100%;
    max-height: 400px;
    transition: transform 0.2s ease;
  }

  button.selected {
    text-decoration: underline;
  }

  .paintingImage:hover {
    transform: scale(1.01);
  }
</style>
