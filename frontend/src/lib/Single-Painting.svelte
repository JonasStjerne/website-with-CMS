<script>
  import apiService from "../api_service";
  import env from "../../env";
  import { set_attributes } from "svelte/internal";

  let promise = apiService.getSinglePainting(1);
</script>

<div class="standartContainer">
  {#await promise}
    Billede Loader
  {:then painting}
    <img
      src={env.ROOT_BACKEND_URL +
        painting.data.attributes.image.data.attributes.url}
      alt="Billede af kunstner"
    />
    <div class="paintingRightColumn">
      <div>
        <h1>{painting.data.attributes.headline}</h1>
        <p>{painting.data.attributes.subheading}</p>
      </div>
      <p>
        {painting.data.attributes.content}
      </p>
      <h2>{painting.data.attributes.price} kr.</h2>
      <button style="display: block; margin-top: auto;">Kontak for salg</button>
    </div>
  {/await}
</div>

<style>
  .standartContainer {
    align-items: flex-start;
    margin-top: 5rem;
  }

  .standartContainer > * {
    max-width: 50%;
  }

  .paintingRightColumn {
    align-self: stretch;
  }
</style>
