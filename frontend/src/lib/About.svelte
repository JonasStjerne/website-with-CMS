<script lang="ts">
  import env from "../../env";
  import apiService from "../api_service";
  let promise = apiService.getAboutContent();
</script>

<div class="standartContainer">
  {#await promise}
    <p>Loading...</p>
  {:then aboutInfo}
    <div>
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
    </div>
  {/await}
</div>
