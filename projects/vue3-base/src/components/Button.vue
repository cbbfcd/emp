<template>
  <div>
    <h2>Vue 3 Base Button Component count</h2>
    <p class="num">{{ count }}</p>
    <button class="button" @click="inc">
      {{ this.title ? this.title : "INC" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: { title: { type: Number, require: false } },
  setup() {},
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    console.log(this)
    this.$forceUpdate()
    console.log('$props',this.$props)
    console.log('$attrs',this.$attrs)
    this.count = parseInt(window.localStorage.getItem("count") || 0);
    console.log("before storage change");
    window.addEventListener(
      "storage",
      (e) => {
        console.error("storage change", e);
        this.count = parseInt(window.localStorage.getItem("count") || 0);
      },
      false
    );
  },
  methods: {
    inc() {
      window.localStorage.setItem("count", ++this.count);
    },
  },
};
</script>

<style>
.num {
  font-size: 90px;
  padding: 0;
  margin: 0;
  font-weight: bold;
}

.button {
  width: 200px;
  padding: 20px 0;
}
</style>
