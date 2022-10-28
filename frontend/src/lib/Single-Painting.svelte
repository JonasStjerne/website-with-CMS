<script>
  import apiService from "../api_service";
  import env from "../../env";
  import { set_attributes } from "svelte/internal";

  let promise = apiService.getSinglePainting(1);
</script>

<div>
  {#await promise}
    Billede Loader
  {:then painting}
    <img
      src={env.ROOT_BACKEND_URL +
        painting.data.attributes.image.data.attributes.url}
      alt="Billede af kunstner"
    />
  {/await}
  <div>
    <div>
      <h1>Den lille kylling</h1>
      <p>Acrylmaling på 40x40 lærred</p>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum
      dolor odit natus? Corrupti, autem itaque? Incidunt eum officiis tenetur
      molestiae! Maxime laborum magni natus exercitationem eveniet ex labore
      reprehenderit!
    </p>
    <h2>4000 kr.</h2>
    <button>Kontak for salg</button>
  </div>
</div>

<style>
</style>
