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
     <el-form  :model="form" label-width="150px">
      <el-form-item label="品类：" prop="Type">
        <el-select  multiple  v-model="form.Type" @remove-tag="handleMaterialTypeRemoveTag" @change="changeFn" >
          <el-option
            :disabled="dType.includes(item.value)"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
     </el-form>
  </div>
</template>
<script>
import myMixin from "@/assets/mixin.js";
export default {
  mixins: [myMixin],
  data() {
    return {
      form:{
          Type:['选项1']
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        dType:[]
    };
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
    this.getdefMaterialType()
    this.changeFn()
    // this.EventBus.$on("test", (val) => {
    //   console.log(val);
    // });
  },
  methods: {
    mouserover() {
      console.log("111");
    },
    handleMaterialTypeRemoveTag(value) {
      const index = this.dType.indexOf(value)
      console.log(index)
        if (index !== -1) {
          this.form.Type.splice(index, 0, value)
        }
      },
      getdefMaterialType(){
        this.dType = this.form.Type
      },
     changeFn(){
        console.log(this.form.Type)
      }
  },
};
</script>
<style lang="scss" scoped>
// div {
//   width: 100px;
//   height: 100px;
//   background: #000;
//   margin-top: 10px;
// }
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
