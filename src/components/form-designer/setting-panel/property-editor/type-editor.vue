<template>
  <el-form-item :label="i18nt('designer.setting.displayType')" v-if="selectedWidget.type === 'input'">
    <el-select v-model="optionModel.type">
      <el-option value="text" :label="i18nt('designer.setting.text')"></el-option>
      <el-option value="password" :label="i18nt('designer.setting.password')"></el-option>

      <!-- 当input的type设置为number时，如果输入非数字字符，则v-model拿到的值为空字符串，无法实现输入校验！故屏蔽之！！ -->
      <!--
      <el-option label="number" value="number"></el-option>
      -->
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "type-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    computed: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
