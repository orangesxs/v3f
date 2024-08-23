<template>
  <el-form-item :label="i18nt('designer.setting.maxLength')">
    <el-input-number type="number" @input="inputNumberHandler" class="hide-spin-button"
              :min="1" :max="max" v-model="maxLength" style="width: 100%" :placeholder="i18nt('designer.acquiesce.inputText')"></el-input-number>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "maxLength-editor",
    mixins: [i18n, propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        max: Infinity
      }
    },
    computed: {
      maxLength: {
        get() {
          return this.optionModel['maxLength']
        },

        set(newValue) {
          if (!newValue || isNaN(newValue)) {
            this.optionModel.maxLength = null
          } else {
            this.optionModel.maxLength = Number(newValue)
          }
        }
      },
    },
    watch: {
       'optionModel.name': {
        handler(newVal) {
          const item = this.designer.getFieldItem(newVal)
          if(item) {
            if(item.scale) {
              this.maxLength = item.scale
              this.max = item.scale
            }
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
