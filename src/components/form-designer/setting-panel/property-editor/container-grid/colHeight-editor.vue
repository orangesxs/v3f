<template>
  <div>
    <el-form-item :label="i18nt('designer.setting.gridColHeight')">
      <el-input-number type="number" v-model="optionModel.colHeight" @input="inputNumberHandler" style="width: 100%;"
                :min="0" class="hide-spin-button" :placeholder="i18nt('designer.acquiesce.inputText')"></el-input-number>
    </el-form-item>
  </div>
</template>

<script>
  import i18n from "@/utils/i18n"
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "colHeight-editor",
    mixins: [i18n, propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },

  }
</script>

<style scoped>

</style>
