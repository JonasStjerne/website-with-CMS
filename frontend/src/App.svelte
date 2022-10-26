<script lang="ts">
  import env from "env";
  import Header from "./lib/Header.svelte";
  import PaintingGrid from "./lib/Painting-grid.svelte";
  import apiService from "./api_service";
  setStylesFromApi();
  //Fetch styles from backend and import them as css variables
  async function setStylesFromApi() {
    //Fetch data
    const response = await apiService.getStyles();

    //Set css variables with object name and value
    Object.keys(response.data).forEach((styleName) => {
      document.documentElement.style.setProperty(
        `--${styleName}`,
        response.data[styleName]
      );
    });
  }
</script>

<Header />
<main>
  <PaintingGrid />
</main>

<style>
</style>
