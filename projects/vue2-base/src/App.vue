<template>
<div>
  <h3>Base App</h3>
  <Content />
</div>
</template>

<script>
import Content from "./components/Content";
export default {
  components: {
    Content,
  },
};
</script>

<style scoped>
img {
  width: 200px;
}

h1 {
  background: url('./logo.png');
  font-family: Arial, Helvetica, sans-serif;
}
</style>
