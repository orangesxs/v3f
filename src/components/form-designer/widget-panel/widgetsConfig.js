// 1.  样式：和系统保持一致。
// 2.  删除：字段（静态文字、HTML）、事件属性，头部工具（PC、PAD... ）、事件属性、需要编辑代码的去掉
// 3.  新增：日期时间选择器
// 4.  修改： 唯一名称、标签、字段校验默认提示
// 5.  上传、选项类数据 调用后端接口
import { translate } from "@/utils/i18n"
function translateText(key, namespace = "designer.acquiesce") {
  const str = namespace + '.' + key
  return translate(str)
}

export const containers = [
  {
    type: "grid",
    category: "container",
    icon: "grid",
    cols: [],
    options: {
      name: "",
      // hidden: false,
      gutter: 12,
      colHeight: null, //栅格列统一高度属性，用于解决栅格列设置响应式布局浮动后被挂住的问题！！
      // customClass: "", //自定义css类名
    },
  },

  {
    type: "grid-col",
    category: "container",
    icon: "grid-col",
    internal: true,
    widgetList: [],
    options: {
      name: "",
      // hidden: false,
      span: 12,
      offset: 0,
      push: 0,
      pull: 0,
      // responsive: false, //是否开启响应式布局
      md: 12,
      sm: 12,
      xs: 12,
      // customClass: "", //自定义css类名
    },
  },
  
  {
    type: "tab",
    category: "container",
    icon: "tab",
    displayType: "border-card",
    tabs: [],
    options: {
      name: "",
      // hidden: false,
      customClass: "", //自定义css类名 && tab选项卡设置  当前已注释自定义css类名
    },
  },

  {
    type: "table",
    category: "container",
    icon: "table",
    rows: [],
    options: {
      name: "",
      // hidden: false,
      // customClass: "", //自定义css类名
    },
  },

  {
    type: "table-cell",
    category: "container",
    icon: "table-cell",
    internal: true,
    widgetList: [],
    merged: false,
    options: {
      name: "",
      cellWidth: "",
      cellHeight: "",
      colspan: 1,
      rowspan: 1,
      wordBreak: false, //是否自动换行
      // customClass: "", //自定义css类名
    },
  },

  {
    type: "tab-pane",
    category: "container",
    icon: "tab-pane",
    internal: true,
    widgetList: [],
    options: {
      name: "",
      label: "",
      // hidden: false,
      active: false,
      disabled: false,
      // customClass: "", //自定义css类名
    },
  },
];

export const basicFields = [
  {
    type: "input",
    icon: "text-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      type: "text",
      defaultValue: "",
      placeholder: translateText('inputText'),
      columnWidth: "200px",
      size: "",
      labelWidth: null,
      labelHidden: false,
      readonly: false,
      disabled: false,
      // hidden: false,
      clearable: true,
      showPassword: false,
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      minLength: null,
      maxLength: null,
      showWordLimit: false,
      prefixIcon: "",
      suffixIcon: "",
      // appendButton: false,
      // appendButtonDisabled: false,
      // buttonIcon: "custom-search",
      //-------------------
      onCreated: "",
      onMounted: "",
      onInput: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
      onAppendButtonClick: "",
    },
  },

  {
    type: "textarea",
    icon: "textarea-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      rows: 3,
      defaultValue: "",
      placeholder: translateText('inputText'),
      columnWidth: "200px",
      size: "",
      labelWidth: null,
      labelHidden: false,
      readonly: false,
      disabled: false,
      // hidden: false,
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      minLength: null,
      maxLength: null,
      showWordLimit: false,
      //-------------------
      onCreated: "",
      onMounted: "",
      onInput: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
    },
  },

  {
    type: "number",
    icon: "number-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: 0,
      placeholder: translateText('inputText'),
      columnWidth: "200px",
      size: "",
      labelWidth: null,
      labelHidden: false,
      disabled: false,
      // hidden: false,
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      min: -0,
      max: 10000,
      precision: 0,
      step: 1,
      controlsPosition: "right",
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
    },
  },

  {
    type: "radio",
    icon: "radio-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: null,
      columnWidth: "200px",
      size: "",
      displayStyle: "inline",
      buttonStyle: false,
      border: false,
      labelWidth: null,
      labelHidden: false,
      disabled: false,
      // hidden: false,
      // 类型 1 选项 2 数据字典
      oType: '1',
      // 字典id
      dictionaryId: '',
      optionItems: [
        { label: translateText('radio') + " 1", value: 1 },
        { label: translateText('radio') + " 2", value: 2 },
        { label: translateText('radio') + " 3", value: 3 },
      ],
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onValidate: "",
    },
  },

  {
    type: "checkbox",
    icon: "checkbox-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: [],
      columnWidth: "200px",
      size: "",
      displayStyle: "inline",
      buttonStyle: false,
      border: false,
      labelWidth: null,
      labelHidden: false,
      disabled: false,
      // hidden: false,
      // 类型 1 选项 2 数据字典
      oType: '1',
      // 字典id
      dictionaryId: '',
      optionItems: [
        { label: translateText('check') + " 1", value: 1 },
        { label: translateText('check') + " 2", value: 2 },
        { label: translateText('check') + " 3", value: 3 },
      ],
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onValidate: "",
    },
  },

  {
    type: "select",
    icon: "select-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: "",
      placeholder: translateText('selectText'),
      columnWidth: "200px",
      size: "",
      labelWidth: null,
      labelHidden: false,
      disabled: false,
      // hidden: false,
      clearable: true,
      filterable: false,
      // allowCreate: false,
      // remote: false,
      // automaticDropdown: false, //自动下拉
      multiple: false,
      multipleLimit: 0,
      // 类型 1 选项 2 数据字典
      oType: '1',
      // 字典id
      dictionaryId: '',
      optionItems: [
        { label: translateText('select') + " 1", value: 1 },
        { label: translateText('select') + " 2", value: 2 },
        { label: translateText('select') + " 3", value: 3 },
      ],
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onRemoteQuery: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
    },
  },

  {
    type: "cascader",
    icon: "cascader-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: "",
      placeholder: translateText('selectText'),
      size: "",
      labelWidth: null,
      labelHidden: false,
      columnWidth: "200px",
      disabled: false,
      // hidden: false,
      clearable: true,
      filterable: false,
      multiple: false,
      checkStrictly: false, //可选择任意一级选项，默认不开启
      showAllLevels: true, //显示完整路径
      // 类型 1 选项 2 数据字典
      oType: '1',
      // 字典id
      dictionaryId: '',
      optionItems: [
        {
          label: "select 1",
          value: 1,
          children: [{ label: "child 1", value: 11 }],
        },
        { label: "select 2", value: 2 },
        { label: "select 3", value: 3 },
      ],
      required: false,
      requiredHint: translateText('required'),
      customRule: "",
      customRuleHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
    },
  },

  {
    type: "time",
    icon: "time-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: null,
      placeholder: translateText('selectText'),
      columnWidth: "200px",
      size: "",
      autoFullWidth: true,
      labelWidth: null,
      labelHidden: false,
      readonly: false,
      disabled: false,
      // hidden: false,
      clearable: true,
      editable: false,
      format: "HH:mm:ss", //时间格式
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
    },
  },

  {
    type: "time-range",
    icon: "time-range-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: null,
      startPlaceholder: translateText('startTimeText'),
      endPlaceholder: translateText('endTimeText'),
      columnWidth: "200px",
      size: "",
      autoFullWidth: true,
      labelWidth: null,
      labelHidden: false,
      readonly: false,
      disabled: false,
      // hidden: false,
      clearable: true,
      editable: false,
      format: "HH:mm:ss", //时间格式
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
    },
  },

  {
    type: "date",
    icon: "date-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      type: "date",
      defaultValue: null,
      placeholder: translateText('selectText'),
      columnWidth: "200px",
      size: "",
      autoFullWidth: true,
      labelWidth: null,
      labelHidden: false,
      readonly: false,
      disabled: false,
      // hidden: false,
      clearable: true,
      editable: false,
      format: "YYYY-MM-DD", //日期显示格式
      valueFormat: "YYYY-MM-DD", //日期对象格式
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
    },
  },

  {
    type: "date-range",
    icon: "date-range-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      type: "daterange",
      format: "YYYY-MM-DD", //日期显示格式
      valueFormat: "YYYY-MM-DD", //日期对象格式
      defaultValue: null,
      startPlaceholder: translateText('startTimeText'),
      endPlaceholder: translateText('endTimeText'),
      columnWidth: "200px",
      size: "",
      autoFullWidth: true,
      labelWidth: null,
      labelHidden: false,
      readonly: false,
      disabled: false,
      // hidden: false,
      clearable: true,
      editable: false,
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
    },
  },

  {
    type: "switch",
    icon: "switch-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: null,
      columnWidth: "200px",
      labelWidth: null,
      labelHidden: false,
      disabled: false,
      // hidden: false,
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      switchWidth: 40,
      activeText: "",
      inactiveText: "",
      activeColor: null,
      inactiveColor: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onValidate: "",
    },
  },

  {
    type: "rate",
    icon: "rate-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: null,
      columnWidth: "200px",
      labelWidth: null,
      labelHidden: false,
      disabled: false,
      // hidden: false,
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      max: 5,
      lowThreshold: 2,
      highThreshold: 4,
      allowHalf: false,
      showText: false,
      showScore: false,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onValidate: "",
    },
  },

  {
    type: "color",
    icon: "color-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      defaultValue: null,
      columnWidth: "200px",
      size: "",
      labelWidth: null,
      labelHidden: false,
      disabled: false,
      // hidden: false,
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onValidate: "",
    },
  },

  {
    type: "slider",
    icon: "slider-field",
    formItemFlag: true,
    options: {
      name: "",
      label: "",
      labelAlign: "",
      columnWidth: "200px",
      showStops: true,
      size: "",
      labelWidth: null,
      labelHidden: false,
      disabled: false,
      // hidden: false,
      required: false,
      requiredHint: translateText('required'),
      validation: "",
      validationHint: "",
      //-------------------
      // customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      min: 0,
      max: 100,
      step: 10,
      range: false,
      //vertical: false,
      height: null,
      //-------------------
      onCreated: "",
      onMounted: "",
      onChange: "",
      onValidate: "",
    },
  },

  {
    type: "static-text",
    icon: "static-text",
    formItemFlag: false,
    options: {
      name: "",
      columnWidth: "200px",
      // hidden: false,
      textContent: "static text",
      textAlign: "left",
      fontSize: "13px",
      preWrap: false, //是否自动换行
      //-------------------
      // customClass: "", //自定义css类名
      //-------------------
      onCreated: "",
      onMounted: "",
    },
  },

  {
    type: "html-text",
    icon: "html-text",
    formItemFlag: false,
    options: {
      name: "",
      columnWidth: "200px",
      // hidden: false,
      htmlContent: "<b>html text</b>",
      //-------------------
      // customClass: "", //自定义css类名
      //-------------------
      onCreated: "",
      onMounted: "",
    },
  },

  {
    type: "button",
    icon: "button",
    formItemFlag: false,
    options: {
      // name: "",
      label: "",
      columnWidth: "200px",
      size: "",
      displayStyle: "block",
      disabled: false,
      // hidden: false,
      type: "",
      link: false,
      plain: false,
      round: false,
      circle: false,
      icon: '',
      //-------------------
      // customClass: "", //自定义css类名
      //-------------------
      onCreated: "",
      onMounted: "",
      onClick: "",
    },
  },

  {
    type: "divider",
    icon: "divider",
    formItemFlag: false,
    options: {
      // name: "",
      label: "",
      columnWidth: "200px",
      direction: "horizontal",
      contentPosition: "center",
      // hidden: false,
      //-------------------
      // customClass: "", //自定义css类名
      //-------------------
      onCreated: "",
      onMounted: "",
    },
  },

  //
];

export const advancedFields = [
  // {
  //   type: "picture-upload",
  //   icon: "picture-upload-field",
  //   formItemFlag: true,
  //   options: {
  //     name: "",
  //     label: "",
  //     labelAlign: "",
  //     labelWidth: null,
  //     labelHidden: false,
  //     columnWidth: "200px",
  //     disabled: false,
  //     // hidden: false,
  //     required: false,
  //     requiredHint: translateText('required'),
  //     customRule: "",
  //     customRuleHint: "",
  //     //-------------------
  //     uploadURL: "",
  //     uploadTip: "",
  //     withCredentials: false,
  //     multipleSelect: false,
  //     showFileList: true,
  //     limit: 3,
  //     fileMaxSize: 5, //MB
  //     fileTypes: ["jpg", "jpeg", "png"],
  //     //headers: [],
  //     //-------------------
  //     // customClass: "", //自定义css类名
  //     labelIconClass: null,
  //     labelIconPosition: "rear",
  //     labelTooltip: null,
  //     //-------------------
  //     onCreated: "",
  //     onMounted: "",
  //     onBeforeUpload: "",
  //     onUploadSuccess: "",
  //     onUploadError: "",
  //     onFileRemove: "",
  //     onValidate: "",
  //     //onFileChange: '',
  //   },
  // },

  // {
  //   type: "file-upload",
  //   icon: "file-upload-field",
  //   formItemFlag: true,
  //   options: {
  //     name: "",
  //     label: "",
  //     labelAlign: "",
  //     labelWidth: null,
  //     labelHidden: false,
  //     columnWidth: "200px",
  //     disabled: false,
  //     // hidden: false,
  //     required: false,
  //     requiredHint: translateText('required'),
  //     customRule: "",
  //     customRuleHint: "",
  //     //-------------------
  //     uploadURL: "",
  //     uploadTip: "",
  //     withCredentials: false,
  //     multipleSelect: false,
  //     showFileList: true,
  //     limit: 3,
  //     fileMaxSize: 5, //MB
  //     fileTypes: ["doc", "docx", "xls", "xlsx"],
  //     //headers: [],
  //     //-------------------
  //     // customClass: "", //自定义css类名
  //     labelIconClass: null,
  //     labelIconPosition: "rear",
  //     labelTooltip: null,
  //     //-------------------
  //     onCreated: "",
  //     onMounted: "",
  //     onBeforeUpload: "",
  //     onUploadSuccess: "",
  //     onUploadError: "",
  //     onFileRemove: "",
  //     onValidate: "",
  //     //onFileChange: '',
  //   },
  // },

  // {
  //   type: "rich-editor",
  //   icon: "rich-editor-field",
  //   formItemFlag: true,
  //   options: {
  //     name: "",
  //     label: "",
  //     labelAlign: "",
  //     placeholder: translateText('inputText'),
  //     labelWidth: null,
  //     labelHidden: false,
  //     columnWidth: "200px",
  //     contentHeight: "200px",
  //     disabled: false,
  //     // hidden: false,
  //     required: false,
  //     requiredHint: translateText('required'),
  //     customRule: "",
  //     customRuleHint: "",
  //     //-------------------
  //     // customClass: "", //自定义css类名
  //     labelIconClass: null,
  //     labelIconPosition: "rear",
  //     labelTooltip: null,
  //     minLength: null,
  //     maxLength: null,
  //     showWordLimit: false,
  //     //-------------------
  //     onCreated: "",
  //     onMounted: "",
  //     onValidate: "",
  //   },
  // },
];

export const customFields = [];

/** 加入容器组件 */
export function addContainerWidgetSchema(containerSchema) {
  containers.push(containerSchema);
}

/** 加入基础字段 */
export function addBasicFieldSchema(fieldSchema) {
  basicFields.push(fieldSchema);
}

/** 加入高级字段 */
export function addAdvancedFieldSchema(fieldSchema) {
  advancedFields.push(fieldSchema);
}

/** 加入自定义字段  */
export function addCustomWidgetSchema(widgetSchema) {
  customFields.push(widgetSchema);
}
