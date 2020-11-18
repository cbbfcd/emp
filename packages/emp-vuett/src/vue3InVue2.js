import {createApp, h} from 'vue'
function vue3InVue2(WrappedComponent, id) {
  let vm
  return {
    props: WrappedComponent.props,
    data() {
      return {
        props: {},
      }
    },
    watch: {
      props: {
        handler(value) {
          // console.log(value)
        },
        deep: true,
      },
    },
    mounted() {
      this.props = this.$props
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        // 手动更正 context
        .map(vnode => {
          vnode.context = this._self
          return vnode
        })
      vm = createApp(h(WrappedComponent, {...this.$attrs, ...this.$listeners}, slots), this.$props)
      vm.mount(`#${id}`)
      // Object.defineProperty(this.$props, 'title', {
      //   set(value) {
      //     console.log(value)
      //   },
      // })
      console.log(vm)
    },
    render() {},
  }
}

export default vue3InVue2
