<!--
/**
 * author: vformAdmin
 * email: vdpadmin@163.com
 * website: https://www.vform666.com
 * date: 2021.08.18
 * remark: 如果要分发VForm源码，需在本文件顶部保留此文件头信息！！
 */
-->

<template>
  <el-container class="main-container full-height">
    <!-- 头部信息 -->
    <!-- <el-header class="main-header">
      <div class="float-left main-title">
        <img src="../../assets/vform-logo.png">
        <span class="bold">VForm 3</span> {{i18nt('application.productTitle')}} <span class="version-span">Ver {{vFormVersion}}</span>
      </div>
      <div class="float-right external-link">
      </div>
    </el-header> -->

    <el-container>
      <el-aside class="side-panel">
        <widget-panel :designer="designer" />
      </el-aside>

      <el-container class="center-layout-container">
        <el-header class="toolbar-header">
          <toolbar-panel :designer="designer" :global-dsv="globalDsv" ref="toolbarRef">
            <template #toolbar>
              <slot name="toolbar"></slot>
            </template>
          </toolbar-panel>
        </el-header>
        <el-main class="form-widget-main">
          <v-form-widget :designer="designer" :form-config="designer.formConfig" :global-dsv="globalDsv" ref="formRef">
          </v-form-widget>
        </el-main>
      </el-container>

      <el-aside>
        <setting-panel :designer="designer" :selected-widget="designer.selectedWidget"
                       :form-config="designer.formConfig" :global-dsv="globalDsv" @edit-event-handler="testEEH" />
      </el-aside>
    </el-container>

  </el-container>
</template>

<script>
  import WidgetPanel from './widget-panel/index'
  import ToolbarPanel from './toolbar-panel/index'
  import SettingPanel from './setting-panel/index'
  import VFormWidget from './form-widget/index'
  import {createDesigner} from "@/components/form-designer/designer"
  import {addWindowResizeHandler, deepClone, getQueryParam, getAllContainerWidgets,
    getAllFieldWidgets, traverseAllWidgets} from "@/utils/util"
  import {MOCK_CASE_URL, VARIANT_FORM_VERSION} from "@/utils/config"
  import i18n, { changeLocale } from "@/utils/i18n"
  import SvgIcon from "@/components/svg-icon/index"

  export default {
    name: "VFormDesigner",
    componentName: "VFormDesigner",
    mixins: [i18n],
    components: {
      SvgIcon,
      WidgetPanel,
      ToolbarPanel,
      SettingPanel,
      VFormWidget,
    },
    props: {
      /** 侧边栏宽度 最低 240px */
      sidePanelWidth: {
        type: String,
        default: '240px',
      },
      /* 语言 默认中文 已监听 可选值 zh-CN | en-US */
      locale: {
        type: String,
        default: 'zh-CN'
      },
      /* 后端字段列表 */
      fieldList: {
        type: Array,
        default: () => []
      },

      /* 禁止显示的组件名称数组 */
      bannedWidgets: {
        type: Array,
        default: () => [
          // 默认禁止显示组件
          'table', 'static-text', 'html-text', 'card', 'rich-editor',
          // ----------- 上传相关组件
          'file-upload', 'picture-upload'
        ]
      },
      /** 
       * 模版列表
       * { title: '', imgUrl: '', description: '', jsonStr: '' }
       */
      formTemplates: {
        type: Array,
        default: () => []
      },

      designerConfig: {
        type: Object,
        default: () => {
          return {
            // languageMenu: false,  //是否显示语言切换菜单
            // externalLink: false,  //是否显示GitHub、文档等外部链接

            showMultimedia: false,  //是否显示多媒体组件
            showStructureTree: false,  //是否显示表单结构树
            showAdvanceAndRetreat: true,  //是否显示前进、后退按钮
            formTemplates: true,  // 是否显示表单模板
            eventCollapse: false,  // 是否显示组件事件属性折叠面板
            widgetNameReadonly: false,  //禁止修改组件名称

            clearDesignerButton: true,  //是否显示清空设计器按钮
            previewFormButton: true,  //是否显示预览表单按钮
            importJsonButton: true,  //是否显示导入JSON按钮
            exportJsonButton: true,  //是否显示导出JSON器按钮
            exportCodeButton: false,  //是否显示导出代码按钮
            generateSFCButton: false,  //是否显示生成SFC按钮

            toolbarMaxWidth: 450,  //设计器工具按钮栏最大宽度（单位像素）
            toolbarMinWidth: 300,  //设计器工具按钮栏最小宽度（单位像素）

            presetCssCode: '',  //设计器预设CSS样式代码

            resetFormJson: true,  //是否在设计器初始化时将表单内容重置为空 如设置为true，则刷新页面时也会清空设计器画布区域，慎用！
          }
        }
      },

      /* 全局数据源变量 */
      globalDsv: {
        type: Object,
        default: () => ({})
      },
      /** 数据字典 数据 */
      dictionary: {
        type: Array,
        default: () => [
          // // 示例值 格式
          // {
          //   id: 'customerType',
          //   label: '客户类型',
          //   options: [
          // 选项数据  赋值给optionItems的格式
          //     {
          //       label: 'vip客户',
          //       value: '1'
          //     }
          //   ]
          // }
        ]
      },

    },
    data() {
      return {
        vFormVersion: VARIANT_FORM_VERSION,
        curLangName: '',
        curLocale: '',
        docUrl: 'https://www.vform666.com/document3.html',
        gitUrl: 'https://github.com/vform666/variant-form3-vite',
        chatUrl: 'https://www.vform666.com/pages/chat-group/',
        subScribeUrl: 'https://www.vform666.com/pages/pro/',

        scrollerHeight: '100%',

        designer: createDesigner(this),

      }
    },
    provide() {
      return {
        getDictionary: () => this.dictionary,
        getGlobalDsv: () => this.globalDsv, // 全局数据源变量
        getFieldList: () => this.fieldList,
        getDesignerConfig: () => this.designerConfig,
        getBannedWidgets: () => this.bannedWidgets,
        getFormTemplates: () => this.formTemplates,
        getSendEmit: () => this.sendEmit,
      }
    },
    created() {
    },
    watch: {
      locale: {
        immediate: true, // 添加立即执行标志
        handler(newValue) {
          this.handleLanguageChanged(newValue)
        }
      },
    },
    mounted() {
      // this.scrollerHeight = window.innerHeight - 56 - 36 + 'px'
      // addWindowResizeHandler(() => {
      //   this.$nextTick(() => {
      //     this.scrollerHeight = window.innerHeight - 56 - 36 + 'px'
      //   })
      // })

    },
    methods: {
      // 发送事件
      sendEmit(eventName, ...args){
        this.$emit(eventName, args)
      },
      testEEH(eventName, eventParams) {
        console.log('test', eventName)
        console.log('test222222', eventParams)
      },
      /** 返回 config 中的配置项的值 */
      backConfigItem(configName) {
        if (this.designerConfig[configName] === undefined) {
          return true
        }

        return !!this.designerConfig[configName]
      },
      /** 切换语言 */
      handleLanguageChanged(command) {
        this.changeLanguage(command)
        this.curLangName = this.i18nt('application.' + command)
      },
      /** 切换语言 */
      changeLanguage(langName) {
        changeLocale(langName)
      },

      /** 设置表单json */
      setFormJson(formJson) {
        let modifiedFlag = false
        if (!!formJson) {
          if (typeof formJson === 'string') {
            modifiedFlag = this.designer.loadFormJson(JSON.parse(formJson) )
          } else if (formJson.constructor === Object) {
            modifiedFlag = this.designer.loadFormJson(formJson)
          }

          if (modifiedFlag) {
            this.designer.emitHistoryChange()
          }
        }
      },
      /**
       * 获取表单json
       */
      getFormJson() {
        return {
          widgetList: deepClone(this.designer.widgetList),
          formConfig: deepClone(this.designer.formConfig)
        }
      },

      clearDesigner() {
        this.$refs.toolbarRef.clearFormWidget()
      },


      /**
       * 刷新表单设计器
       */
      refreshDesigner() {
        //this.designer.loadFormJson( this.getFormJson() )  //只有第一次调用生效？？

        let fJson = this.getFormJson()
        this.designer.clearDesigner(true)  //不触发历史记录变更
        this.designer.loadFormJson(fJson)
      },

      /**
       * 预览表单
       */
      previewForm() {
        this.$refs.toolbarRef.previewForm()
      },

      /**
       * 导入表单JSON
       */
      importJson() {
        this.$refs.toolbarRef.importJson()
      },

      /**
       * 导出表单JSON
       */
      exportJson() {
        this.$refs.toolbarRef.exportJson()
      },

      /**
       * 导出Vue/HTML代码
       */
      exportCode() {
        this.$refs.toolbarRef.exportCode()
      },

      /**
       * 生成SFC代码
       */
      generateSFC() {
        this.$refs.toolbarRef.generateSFC()
      },

      /**
       * 获取所有字段组件
       * @returns {*[]}
       */
      getFieldWidgets(widgetList = null) {
        return !!widgetList ? getAllFieldWidgets(widgetList) : getAllFieldWidgets(this.designer.widgetList)
      },

      /**
       * 获取所有容器组件
       * @returns {*[]}
       */
      getContainerWidgets(widgetList = null) {
        return !!widgetList ? getAllContainerWidgets(widgetList) : getAllContainerWidgets(this.designer.widgetList)
      },

      /**
       * 升级表单json，以补充最新的组件属性
       * @param formJson
       */
      upgradeFormJson(formJson) {
        if (!formJson.widgetList || !formJson.formConfig) {
          this.$message.error('Invalid form json!')
          return
        }

        traverseAllWidgets(formJson.widgetList, (w) => {
          this.designer.upgradeWidgetConfig(w)
        })
        this.designer.upgradeFormConfig(formJson.formConfig)

        return formJson
      },
      /** 校验字段 */
      validateField() {
        const fieldList = this.getFieldWidgets()
        let errNameItem = null
        fieldList.forEach(f => {
          if (errNameItem) return
          if (!this.designer.fieldInList(f.name)) {
            errNameItem = f
            this.designer.setSelected(f.field)
            // const label = f.field.options.label
            this.$message.error(`${this.i18nt('designer.setting.fieldNameError')}`)
          }
        })
        return !Boolean(errNameItem)
      },
      /** 校验字段 数量 */
      validateFieldNum() {
        const fieldList = this.getFieldWidgets()
        return fieldList.length === this.fieldList.length
      },
      getWidgetRef(widgetName, showError = false) {
        return this.$refs['formRef'].getWidgetRef(widgetName, showError)
      },

      getSelectedWidgetRef() {
        return this.$refs['formRef'].getSelectedWidgetRef()
      },

      //TODO: 增加更多方法！！

    }
  }
</script>

<style lang="scss" scoped>
  .el-container.main-container {
    background: #fff;

    :deep(aside) {  /* 防止aside样式被外部样式覆盖！！ */
      margin: 0;
      padding: 0;
      background: inherit;
    }
  }

  .el-container.full-height {
    height: 100%;
    overflow-y: hidden;
  }

  .el-container.center-layout-container {
    min-width: 680px;
    border-left: 2px dotted #EBEEF5;
    border-right: 2px dotted #EBEEF5;
  }

  .el-dropdown-link {
    margin-right: 12px;
    cursor: pointer;
  }

  .el-header.toolbar-header {
    font-size: 14px;
    border-bottom: 1px dotted #CCCCCC;
    height: 42px !important;
    //line-height: 42px !important;
  }

  .el-aside.side-panel {
    width: v-bind(sidePanelWidth) !important;
    overflow-y: hidden;
  }

  .el-main.form-widget-main {
    padding: 0;

    position: relative;
    overflow-x: hidden;
  }

  .container-scroll-bar {
    :deep(.el-scrollbar__wrap), :deep(.el-scrollbar__view) {
      overflow-x: hidden;
    }
  }
</style>
