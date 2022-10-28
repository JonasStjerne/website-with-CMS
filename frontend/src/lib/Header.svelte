<script>
  import { Link } from "svelte-routing";
</script>

<header>
  <h1>Frank Stjerne</h1>
  <ul>
    <li><Link to="malerier">Malerier</Link></li>
    <li><Link to="om">Om</Link></li>
    <li><Link to="kontakt">Kontakt</Link></li>
  </ul>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2rem;
  }

  ul {
    display: flex;
    gap: 2rem;
  }

  li {
    list-style: none;
  }
</style>
