<script>
  import { Link } from "svelte-routing";
</script>

<header>
  <Link to="/"><h1>Frank Stjerne</h1></Link>
  <ul>
    <li><Link to="/">Malerier</Link></li>
    <li><Link to="om">Om</Link></li>
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
    padding-inline: 1rem;
  }

  li {
    list-style: none;
  }

  a:hover {
    filter: brightness(2);
  }
</style>
