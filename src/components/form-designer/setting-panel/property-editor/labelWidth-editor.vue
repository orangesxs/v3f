<template>
  <el-form-item>
    <template #label>
      <span>{{ i18nt('designer.setting.labelWidth') }}
        <el-tooltip effect="light" :content="i18nt('designer.setting.labelWidthHelp')">
          <svg-icon icon-class="el-info" />
        </el-tooltip>
      </span>
    </template>
    <el-input-number
      type="number" 
      :placeholder="i18nt('designer.acquiesce.inputText')"
      v-model="optionModel.labelWidth"
      @input="inputNumberHandler"
      style="width: 100%"
      :min="0"
      :max="100" 
      class="hide-spin-button"
      >
    </el-input-number>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"
  import SvgIcon from "@/components/svg-icon/index";
  export default {
    name: "labelWidth-editor",
    mixins: [i18n, propertyMixin],
    components: {
      SvgIcon
    },
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
