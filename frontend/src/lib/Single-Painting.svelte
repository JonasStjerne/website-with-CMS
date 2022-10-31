<script>
  import apiService from "../api_service";
  import env from "../../env";
  export let id;
  let promise = apiService.getSinglePainting(id);
  let aboutPromise = apiService.getAboutContent();
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
      {#await aboutPromise then about}
        <div class="contactContainer">
          Kontak <b>{about.data.attributes.email}</b> for køb
        </div>
      {/await}
    </div>
  {/await}
</div>

<style>
  .contactContainer {
    margin: auto 2rem 0;
    padding: 0.5rem;
    border: 3px solid var(--primary);
    border-radius: 5px;
  }

  .standartContainer {
    align-items: flex-start;
    margin-top: 5rem;
  }

  .standartContainer > * {
    max-width: 50%;
  }

  .paintingRightColumn {
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    .standartContainer > * {
      max-width: 100%;
    }
  }
</style>
