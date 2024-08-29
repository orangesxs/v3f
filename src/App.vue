<template>
  <div id="app">
    <VFormDesigner 
      ref="vfDesignerRef"
      :fieldList="fieldList" 
      :formTemplates="formTemplates" 
      :global-dsv="globalDsv"
      :locale="locale"
      :dictionary="dictionary"
    >
    <template #toolbar>
      <el-button type="text" @click="refreshWebPage">刷新网页</el-button>
      <el-button type="text" @click="doTest">测试btn</el-button>
    </template>
    </VFormDesigner>
    <!-- <VFormRender ref="vfRenderRef" />
    <el-button type="text" @click="doTest">测试btn</el-button> -->
  </div>
</template>

<script>
import VFormDesigner from "./components/form-designer/index.vue";
import VFormRender from "./components/form-render/index.vue";
import * as DATA from "./data.js"
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
        /** 数据字典 */
        optionsDict: DATA.optionsDict
      },
      dictionary: DATA.optionsDict,
      fieldList: [],
      // DATA.formTemplates
      formTemplates: [],
      locale: 'zh-CN'
    };
  },
  created() {
    //
    setTimeout(() => {
      console.log('888888888888888888888888',)
      this.fieldList = DATA.fieldList
    }, 5000);
  },
  computed: {
    //
  },
  methods: {
    refreshWebPage(){
      location.reload();
    },
    doTest() {
      // // this.$refs.vfRenderRef.getFormDataDialog()
      // const eeeeeeee = this.$refs.vfDesignerRef.getFieldWidgets()
      // console.log('eeeeeeee',eeeeeeee)
      // // const aabbaa = this.$refs.vfDesignerRef.designer
      // // console.log('aaaaaaaaaaa',aabbaa)
      // // setSelected
      // this.$refs.vfDesignerRef.designer.setSelected(eeeeeeee[0].field)
      this.$refs.vfDesignerRef.validateField()
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  // overflow: auto;
  // height: 800px;
}
</style>
