<template>
  <div>
    <h1>VUE 3 Project！</h1>
    <v3b-button />
    <v3b-content />
    123123
    <v3p-content />
  </div>
</template>

<script>
import Content from '@v3p/Content'
export default {
  components:{
    'v3p-content': Content
  },
  setup() {},
  mounted() {},
  name: "App",
};
</script>
