<template>
  <el-form-item label-width="0">
    <div style="margin-bottom: 10px;width: 100%;">
      <el-radio-group v-model="optionModel.oType">
        <el-radio-button label="1">
          {{ i18nt('designer.setting.optionsSetting') }}
        </el-radio-button>
        <el-radio-button label="2">
          {{ i18nt('designer.setting.dataDictionary') }}
        </el-radio-button>
      </el-radio-group>
    </div>

    <div style="width: 100%;" v-if="optionModel.oType === '1'">
      <option-items-setting :designer="designer" :selected-widget="selectedWidget"></option-items-setting>
    </div>
    <div style="width: 100%;display: flex;" v-if="optionModel.oType === '2'">
      <div style="width: 40%;"> {{ i18nt('designer.setting.selectDictionary') }}</div>
      <el-select style="width: 60%;" v-model="optionModel.dictionaryId">
        <el-option v-for="item in dictOptions"
          :key="item.id"
          :label="item.label"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"
  import OptionItemsSetting from "@/components/form-designer/setting-panel/option-items-setting"
import { deepClone } from "@/utils/util"
  export default {
    name: "optionItems-editor",
    mixins: [i18n],
    inject: ['getDictionary'],
    data(){
      return {
        dictOptions: this.getDictionary()
      }
    },
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    components: {
      OptionItemsSetting,
    },
    mounted() {
    },
    watch: {
      // 监听绑定字典id
      'optionModel.dictionaryId': {
        immediate: true,
        handler(id) {
          if(id){
            this.getDictionary().forEach(item => {
              if(item.id === id){
                this.optionModel.optionItems = deepClone(item.options)
              }
            })
          }
        }
      },
      // 监听字典id
      'optionModel.oType': {
        immediate: true,
        handler(type) {
          if(type === '2') {
            this.getDictionary().forEach(item => {
              if(item.id === this.optionModel.dictionaryId) {
                this.optionModel.optionItems = deepClone(item.options)
              }
            })
          }
        }
      },
    }
  }
</script>

<style scoped>

</style>
