<script lang="ts">
  import env from "../../env";
  import apiService from "../api_service";
  let promise = apiService.getAboutContent();
</script>

<div class="standartContainer">
  {#await promise}
    <div class="loader" />
  {:then aboutInfo}
    <img
      src={env.ROOT_BACKEND_URL +
        aboutInfo.data.attributes.picture.data.attributes.url}
      alt={env.ROOT_BACKEND_URL +
        aboutInfo.data.attributes.picture.data.attributes.alternativeText}
    />
    <div>
      <h1>{aboutInfo.data.attributes.heading}</h1>
      <p>{aboutInfo.data.attributes.content}</p>
    </div>
  {/await}
</div>

<style>
  .standartContainer {
    margin-top: 2rem;
  }

  .standartContainer img {
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    .standartContainer img {
      width: 100%;
    }
  }
</style>
