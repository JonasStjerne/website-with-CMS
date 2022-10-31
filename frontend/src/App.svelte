<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./lib/Header.svelte";
  import PaintingGrid from "./lib/Painting-grid.svelte";
  import apiService from "./api_service";
  import SinglePainting from "./lib/Single-Painting.svelte";
  import About from "./lib/About.svelte";

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

  export let url = "";
</script>

<Router {url}>
  <Header />
  <main>
    <Route path="/" component={PaintingGrid} />
    <Route path="malerier/:id" let:params>
      <SinglePainting id={params.id} />
    </Route>
    <Route path="om" component={About} />
  </main>
</Router>

<style>
</style>
