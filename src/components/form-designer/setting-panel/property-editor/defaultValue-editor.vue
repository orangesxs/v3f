<template>
  <el-form-item v-if="ifFormItem" :label="i18nt('designer.setting.defaultValue')"  :placeholder="i18nt('designer.acquiesce.inputText')">
    <el-input type="text" v-model="optionModel.defaultValue" :placeholder="i18nt('designer.acquiesce.inputText')"
              @change="emitDefaultValueChange"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "defaultValue-editor",
    mixins: [i18n, propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    computed: {
      ifFormItem() {
        return !this.hasConfig('optionItems')
      }
    }
  }
</script>

<style scoped>

</style>
