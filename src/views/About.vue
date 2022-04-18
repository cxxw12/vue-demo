<template>
  <div>
    <div @mouseover="mouserover"></div>
    <div></div>
    <p>
      1111111111111111111 11111111111111111 11111111111111111111
      11111111111111111111111 1111111111111111111
    </p>
		<p>
  2222221111111111111111111 11111111111111111 11111111111111111111
		11111111111111111111111 111111111111111111122222
		</p>
  </div>
</template>
<script>
import myMixin from "@/assets/mixin.js";
export default {
  mixins: [myMixin],
  data() {
    return {};
  },
  mounted() {
    console.log(this.mixinNum)
    /**
     *$on方法为叠加使用，需使用$off方法先解绑事件。
     *$off可以写成数组形式
     **/
    this.EventBus.$off(["test", "test2"]);
    // this.EventBus.$off("test");
    /**
     *$emit(eventName)  触发当前实例上的事件，附加参数都会传给监听器回调。
     *$on(eventName) 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
     *$on可以写成数组形式
     **/
    this.EventBus.$on(["test","test2"], (val) => {
      console.log(val);
    });
    // this.EventBus.$on("test", (val) => {
    //   console.log(val);
    // });
  },
  methods: {
    mouserover() {
      console.log("111");
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  width: 100px;
  height: 100px;
  background: #000;
  margin-top: 10px;
}
p {
  position: relative;
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
}
p::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  background: -webkit-linear-gradient(left, transparent, #fff 0%);
  background: -o-linear-gradient(right, transparent, #fff 0%);
  background: -moz-linear-gradient(right, transparent, #fff 0%);
  background: linear-gradient(to right, transparent, #fff 0%);
}
</style>
