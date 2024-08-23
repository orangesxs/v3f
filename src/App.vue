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
    <el-button type="text" @click="refreshWebPage">刷新网页</el-button>
    <el-button type="text" @click="doTest">测试btn</el-button>
    </VFormDesigner>
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

      // const jsons = {"widgetList":[{"key":88679,"type":"date","icon":"date-field","formItemFlag":true,"options":{"name":"date90798","label":"date","labelAlign":"","type":"date","defaultValue":null,"placeholder":"","columnWidth":"200px","size":"","autoFullWidth":true,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"editable":false,"format":"YYYY-MM-DD","valueFormat":"YYYY-MM-DD","required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"date90798"},{"key":51845,"type":"switch","icon":"switch-field","formItemFlag":true,"options":{"name":"switch46049","label":"switch","labelAlign":"","defaultValue":false,"columnWidth":"200px","labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"switchWidth":40,"activeText":"","inactiveText":"","activeColor":null,"inactiveColor":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"switch46049"},{"key":77026,"type":"time-range","icon":"time-range-field","formItemFlag":true,"options":{"name":"timerange34049","label":"time-range","labelAlign":"","defaultValue":null,"startPlaceholder":"","endPlaceholder":"","columnWidth":"200px","size":"","autoFullWidth":true,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"editable":false,"format":"HH:mm:ss","required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"timerange34049"},{"key":22510,"type":"select","icon":"select-field","formItemFlag":true,"options":{"name":"select43554","label":"select","labelAlign":"","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"clearable":true,"filterable":false,"allowCreate":false,"remote":false,"automaticDropdown":false,"multiple":false,"multipleLimit":0,"optionItems":[{"label":"select 1","value":1},{"label":"select 2","value":2},{"label":"select 3","value":3}],"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onRemoteQuery":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"select43554"},{"key":59788,"type":"checkbox","icon":"checkbox-field","formItemFlag":true,"options":{"name":"checkbox99669","label":"checkbox","labelAlign":"","defaultValue":[],"columnWidth":"200px","size":"","displayStyle":"inline","buttonStyle":false,"border":false,"labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"optionItems":[{"label":"check 1","value":1},{"label":"check 2","value":2},{"label":"check 3","value":3}],"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"checkbox99669"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}}

      // let fieldList = this.$refs.vfDesignerRef.getFieldWidgets(null, true);
      // console.log("test", fieldList);

      // console.log('testtesttest', this.$refs.vfDesignerRef.getFormJson())
      // this.$refs.vfDesignerRef.setFormJson(jsons)
      // this.$refs.vfDesignerRef.changeLanguage('en-US')
      
      // setTimeout(() => {
        // this.$refs.vfDesignerRef.changeLanguage('en-US')
      // }, 3000);
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
