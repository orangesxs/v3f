<template>
  <el-form-item :label="i18nt('designer.setting.suffixIcon')">
    <!-- <el-input type="text" v-model="optionModel.suffixIcon"></el-input> -->

    <el-select v-model="optionModel.suffixIcon" clearable filterable :placeholder="i18nt('designer.acquiesce.selectText')">
      <el-option v-for="item in options"
        :key="item"
        :label="item"
        :value="item">
        <svg-icon :icon-class="item" />
        {{ item }}
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n";
  import iconsSymbolIdData from '@/icons/generateSvgIconsJson/icons-symbolId.json'
  import SvgIcon from '@/components/svg-icon'
  export default {
    name: "suffixIcon-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    components: {
      SvgIcon
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
