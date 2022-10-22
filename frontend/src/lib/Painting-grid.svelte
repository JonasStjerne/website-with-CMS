<script>
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
</script>

<div>
  <script src="/path/to/masonry.pkgd.min.js"></script>
  <button>Til Salg</button>
  <button>Alle</button>
  <div class="grid">
    <div class="grid-item">...</div>
    <div class="grid-item grid-item--width2">...</div>
    <div class="grid-item">...</div>
    ...
  </div>
</div>
