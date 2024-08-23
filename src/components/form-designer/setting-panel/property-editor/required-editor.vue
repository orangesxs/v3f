<template>
  <el-form-item :label="i18nt('designer.setting.required')">
    <el-tooltip
        :disabled="!switchDisabled"
        :content="i18nt('designer.setting.required')"
        placement="top"
      >
        <el-switch v-model="optionModel.required" :disabled="switchDisabled"></el-switch>
      </el-tooltip>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "required-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data(){
      return {
        switchDisabled: false
      }
    },
    watch: {
       'optionModel.name': {
        handler(newVal) {
          const item = this.designer.getFieldItem(newVal)
          if(item) {
            const required =  Boolean(item.notNull)
            this.optionModel.required = required
            this.switchDisabled = required
          }
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>

<style scoped>

</style>
