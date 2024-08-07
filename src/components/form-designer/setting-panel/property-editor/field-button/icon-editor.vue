<template>
  <el-form-item :label="i18nt('designer.setting.buttonIcon')">
    <!-- <el-input type="text" v-model="optionModel.icon"></el-input> -->
     
    <el-select v-model="optionModel.icon" clearable filterable :placeholder="i18nt('designer.acquiesce.selectText')">
      <el-option v-for="item in options"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import iconsSymbolIdData from '@/icons/generateSvgIconsJson/icons-symbolId.json'
  export default {
    name: "icon-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data(){
      return {
        options: iconsSymbolIdData.symbolIdList,
      }
    }
  }
</script>

<style scoped>

</style>
