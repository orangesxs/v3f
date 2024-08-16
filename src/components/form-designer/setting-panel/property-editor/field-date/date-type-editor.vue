<template>
  <el-form-item :label="i18nt('designer.setting.displayType')">
    <el-select v-model="optionModel.type">
      <el-option :label="i18nt('designer.setting.datetime') " value="datetime"></el-option>
      <el-option :label="i18nt('designer.setting.date') " value="date"></el-option>
      <el-option :label="i18nt('designer.setting.week') " value="week"></el-option>
      <el-option :label="i18nt('designer.setting.month') " value="month"></el-option>
      <el-option :label="i18nt('designer.setting.year') " value="year"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n";

  export default {
    name: "date-type-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
