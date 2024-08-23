<template>
  <!-- 容器组件不显示 name 属性 -->
  <el-form-item prop="name" :rules="nameRequiredRule" v-if="!selectedWidget.category">
    <template #label>
      <span>{{i18nt('designer.setting.uniqueName')}}
        <el-tooltip effect="light" :content="i18nt('designer.setting.editNameHelp')">
          <svg-icon icon-class="el-info" /></el-tooltip>
      </span>
    </template>
    <template v-if="!!selectedWidget.category || noFieldList">
      <el-input type="text" v-model="optionModel.name" :readonly="widgetNameReadonly" @change="updateWidgetNameAndRef"></el-input>
    </template>
    <template v-else>
      <!-- allow-create -->
      <el-select v-model="optionModel.name"  filterable :disabled="widgetNameReadonly" @change="updateWidgetNameAndRef"
                 :title="i18nt('designer.setting.editNameHelp')">
        <el-option v-for="(sf, sfIdx) in disabledServerFieldList" :key="sfIdx" :label="sf.description" :value="sf.displayName" :disabled="sf.disabled"></el-option>
      </el-select>
    </template>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import {isEmptyStr} from "@/utils/util"
  import SvgIcon from "@/components/svg-icon/index";

  export default {
    name: "name-editor",
    mixins: [i18n],
    components: {
      SvgIcon
    },
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    inject: ['getDesignerConfig', 'getFieldList'],
    data() {
      return {
        nameRequiredRule: [{required: true }],
        // // serverFieldList: this.designer.fieldList
        // serverFieldList: []
      }
    },
    computed: {
      serverFieldList(){
        return this.designer.vueInstance.fieldList
      },
      noFieldList() {
        return !this.serverFieldList || (this.serverFieldList.length <= 0)
      },

      widgetNameReadonly() {
        return !!this.getDesignerConfig().widgetNameReadonly
      },
      disabledServerFieldList() {
          // 获取当前选中的小部件名称
        // let oldName = this.designer.selectedWidgetName
        const list = this.serverFieldList.map(item => {
          // 检查新名称是否已经存在于表单小部件的引用列表中
          let foundRef = this.designer.formWidget.getWidgetRef(item.displayName)
          if (!!foundRef) {
            // 如果找到重复的名称 true
            return {
              disabled: true,
              ...item
            }
          } else {
            return {
              disabled: false,
              ...item
            }
          }
        })
        return list
      }
    },
    methods: {
      updateWidgetNameAndRef(newName) {
        let oldName = this.designer.selectedWidgetName
        if (isEmptyStr(newName)) {
          this.selectedWidget.options.name = oldName
          this.$message.info(this.i18nt('designer.hint.nameRequired'))
          return
        }

        if (!!this.designer.formWidget) {
          let foundRef = this.designer.formWidget.getWidgetRef(newName) // 检查newName是否已存在！！
          if (!!foundRef) {
            this.selectedWidget.options.name = oldName
            this.$message.info(this.i18nt('designer.hint.duplicateName') + newName)
            return
          }

          let widgetInDesign = this.designer.formWidget.getWidgetRef(oldName)
          if (!!widgetInDesign && !!widgetInDesign.registerToRefList) {
            widgetInDesign.registerToRefList(oldName)  //注册组件新的ref名称并删除老的ref！！
            let newLabel = this.designer.getFieldItem(newName).description
            this.designer.updateSelectedWidgetNameAndLabel(this.selectedWidget, newName, newLabel)
          }
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
