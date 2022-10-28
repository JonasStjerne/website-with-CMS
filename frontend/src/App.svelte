<script lang="ts">
  import Header from "./lib/Header.svelte";
  import PaintingGrid from "./lib/Painting-grid.svelte";
  import apiService from "./api_service";
  import SinglePainting from "./lib/Single-Painting.svelte";

  setStylesFromApi();

  //Fetch styles from backend and import them as css variables
  async function setStylesFromApi() {
    //Fetch data
    const response = await apiService.getStyles();

    //Set css variables with object name and value
    Object.keys(response.data.attributes).forEach((styleName) => {
      document.documentElement.style.setProperty(
        `--${styleName}`,
        response.data.attributes[styleName]
      );
    });
  }

  let selectedPage = 1;
</script>

<Header />
<button on:click={() => (selectedPage = 2)} />
<main>
  {#if selectedPage == 1}
    <PaintingGrid />
  {:else if selectedPage == 2}
    <SinglePainting />
  {/if}
</main>

<style>
</style>
