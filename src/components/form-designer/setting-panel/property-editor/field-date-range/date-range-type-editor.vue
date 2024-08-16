<template>
  <el-form-item :label="i18nt('designer.setting.displayType')">
    <el-select v-model="optionModel.type" @change="changeType">
      <el-option 
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n";

  export default {
    data() {
      return {
        options: [
          {
            label: '日期范围',
            value: 'daterange'
          },
          {
            label: '时间日期范围',
            value: 'datetimerange'
          }
        ]
      }
    },
    name: "date-range-type-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    methods: {
      changeType(t) {
        if (t === 'datetimerange') {
          this.optionModel.valueFormat = 'YYYY-MM-DD HH:mm:ss'
          this.optionModel.format = 'YYYY-MM-DD HH:mm:ss'
        }
        if (t === 'daterange') {
          this.optionModel.valueFormat = 'YYYY-MM-DD'
          this.optionModel.format = 'YYYY-MM-DD'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
