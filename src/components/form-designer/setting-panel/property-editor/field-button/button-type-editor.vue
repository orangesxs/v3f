<template>
  <el-form-item :label="i18nt('designer.setting.displayType')">
    <el-select v-model="optionModel.type">
      <el-option :label="i18nt('designer.setting.default')" default value=""></el-option>
      <el-option :label="i18nt('designer.setting.primary')" value="primary"></el-option>
      <el-option :label="i18nt('designer.setting.success')" value="success"></el-option>
      <el-option :label="i18nt('designer.setting.warning')" value="warning"></el-option>
      <el-option :label="i18nt('designer.setting.danger')" value="danger"></el-option>
      <el-option :label="i18nt('designer.setting.info')" value="info"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "button-type-editor",
    mixins: [i18n, propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style lang="scss" scoped>

</style>
