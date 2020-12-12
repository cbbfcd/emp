<script>
  export let name;

  window.addEventListener("change-name", e => {
    console.log(e);
    if (typeof e.detail !== "undefined") {
      name = e.detail.name;
    }
  });
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1 id="hid">Hello From Svelte ##Jeremy## {name}! <div id="divid">this is something</div></h1>
