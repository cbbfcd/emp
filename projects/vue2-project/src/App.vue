<template>
  <div>
    <h3>Main App</h3>
    <div id="button"></div>
    <Button :title="num" testAttrs="testAttrs"/>
    <Content :dataProps="num" :methodProps="propsFunc" @myEvent="emitFunc" />
  </div>
</template>

<script>
//import Content from "@v2b/Content"
import Button from "@v3b/Button";
import { vue3InVue2 } from "../../emp-vuett";
export default {
  components: {
    Content: () => import("@v2b/Content"),
    Button: vue3InVue2(Button, "button"),
  },
  data() {
    return {
      num: 0,
    };
  },
  mounted(){
    setInterval(()=>{this.num++},1000)
  },
  methods: {
    propsFunc() {
      console.log("Vue3 to Vue2 Method Props");
    },
    emitFunc() {
      this.num++;
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
