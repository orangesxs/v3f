<template>
  <el-form-item>
    <template #label>
      <span>{{i18nt('designer.setting.validation')}}
        <el-tooltip effect="light" :content="i18nt('designer.setting.validationHelp')">
          <svg-icon icon-class="el-info" /></el-tooltip>
      </span>
    </template>
    <el-select v-model="optionModel.validation" @change="changeValidation" filterable clearable allow-create default-first-option>
      <el-option v-for="(fv, fvIdx) in fieldValidators"
                 :key="fvIdx"
                 :label="fv.label"
                 :value="fv.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import { fieldValidators } from "@/utils/validators";
  import SvgIcon from "@/components/svg-icon/index";

  export default {
    name: "validation-editor",
    mixins: [i18n],
    components: {
      SvgIcon
    },
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        fieldValidators: fieldValidators
      }
    },
    methods: {
      changeValidation(v) {
        console.log(v)
        const item = this.fieldValidators.find(fv => fv.value === v)
        if (item) {
          this.optionModel.validationHint = this.optionModel.label + item.defaultErrorMsg
        } else {
          this.optionModel.validationHint = ''
        }
      }
    }

  }
</script>

<style scoped>

</style>
