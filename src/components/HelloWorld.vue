<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <div ref="box"></div>
    <div @click="getText">getText</div> -->
  </div>
</template>

<script>
// import E from "wangeditor";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      isClear: false,
      content: "",
      editor: "",
    };
  },
  methods: {
    // getText() {
    //   console.log(this.editor.txt.text())
    // }
  },
  mounted() {
    //初始化
    // this.editor = new E(this.$refs.box);
    // this.editor.create();
    // this.editor.customConfig.uploadImgShowBase64 = true
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
