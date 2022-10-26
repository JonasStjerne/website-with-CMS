<script lang="ts">
  import apiService from "src/api_service";
  const contentPromise = apiService.getAboutContent();
</script>

{#await contentPromise}
  <p>Loading...</p>
{:then content}
  <div>
    <img
      src={content.data.attributes.picture.data.attributes.url}
      alt={content.data.attributes.picture.data.attributes.alternativeText}
    />
    <div>
      <h1>{content.data.attributes.heading}</h1>
      <p>{content.data.attrubutes.content}</p>
    </div>
  </div>
{/await}
