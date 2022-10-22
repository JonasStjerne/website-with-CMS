<script>
  import type { paintingService } from "src/api_service";
  import { onMount } from "svelte";

  async onMount(() => {
    const paintings = await paintingService.getAllPaintings();
  //   var elem = document.querySelector(".grid");
  //   // @ts-ignore
  //   var msnry = new Masonry(elem, {
  //     // options
  //     itemSelector: ".grid-item",
  //     columnWidth: 200,
  //   });

  //   // element argument can be a selector string
  //   //   for an individual element
  //   // @ts-ignore
  //   var msnry = new Masonry(".grid", {
  //     // options
  //   });
  // });
</script>

<div>
  <button>Til Salg</button>
  <button>Alle</button>
  <!-- {#if paintings}
    {#each paintings as painting}
      {painting}
    {/each}
  {/if} -->
  <div class="grid">
    <div class="grid-item">...</div>
    <div class="grid-item grid-item--width2">...</div>
    <div class="grid-item">...</div>
    ...
  </div>
</div>
