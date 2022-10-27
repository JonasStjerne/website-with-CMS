<script>
  import { onMount } from "svelte";

  onMount(() => {
    var elem = document.querySelector(".grid");
    // @ts-ignore
    var msnry = new Masonry(elem, {
      // options
      itemSelector: ".grid-item",
      columnWidth: 200,
    });

    // element argument can be a selector string
    //   for an individual element
    // @ts-ignore
    var msnry = new Masonry(".grid", {
      // options
    });
  });
</script>

<div>
  <button on:click={setFilter("avalible")}>Til Salg</button>
  <button on:click={setFilter("all")}>Alle</button>
  <div class="grid">
    <!-- {#await paitings}
    <div class="grid-item">...</div>
    <div class="grid-item grid-item--width2">...</div>
    <div class="grid-item">...</div>
    ...
  </div>
</div>
