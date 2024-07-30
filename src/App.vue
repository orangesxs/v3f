<template>
  <div id="app">
    <VFormDesigner :fieldList="fieldList" ref="vfDesignerRef" :global-dsv="globalDsv" />
  </div>
</template>

<script>
import VFormDesigner from "./components/form-designer/index.vue";
import VFormRender from "./components/form-render/index.vue";

/**
 * <template #customToolButtons>
        <el-button type="text" @click="doTest">测试btn</el-button>
      </template>
 */

export default {
  name: "App",
  components: {
    VFormDesigner,
    VFormRender,
  },
  data() {
    return {
      //全局数据源变量
      globalDsv: {
        testApiHost: "http://www.test.com/api",
        testPort: 8080,
      },
      fieldList: [
        {
          label: "姓名",
          name: 'name'
        },
        {
          label: "年龄",
          name: 'age'
        },
        {
          label: "生日",
          name: 'birthday'
        },
      ]
    };
  },
  computed: {
    //
  },
  methods: {
    doTest() {
      let fieldList = this.$refs.vfDesignerRef.getFieldWidgets(null, true);
      console.log("test", fieldList);
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  overflow: auto;
}
</style>
