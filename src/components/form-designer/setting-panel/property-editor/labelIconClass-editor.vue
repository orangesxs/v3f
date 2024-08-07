<template>
  <div>
    <el-form-item label-width="0">
      <el-divider class="custom-divider">
        {{i18nt('designer.setting.customLabelIcon')}}
      </el-divider>
    </el-form-item>
    <el-form-item :label="i18nt('designer.setting.labelIconClass')">
      <!-- <el-input type="text" v-model="optionModel.labelIconClass"></el-input> -->
      <el-select v-model="optionModel.labelIconClass" clearable filterable :placeholder="i18nt('designer.acquiesce.selectText')">
        <el-option v-for="item in options"
          :key="item"
          :value="item"
          :label="item"
          >
          <svg-icon :icon-class="item" />
          {{ item }}
        </el-option>
      </el-select>

    </el-form-item>
  </div>
</template>

<script>
  import i18n from "@/utils/i18n"
  import iconsSymbolIdData from '@/icons/generateSvgIconsJson/icons-symbolId.json'
  import SvgIcon from '@/components/svg-icon'
  export default {
    name: "labelIconClass-editor",
    mixins: [i18n],
    components: {
      SvgIcon
    },
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
