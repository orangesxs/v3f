import {isEmptyStr, isNull} from "./util";


import { translate } from "@/utils/i18n"
const translateHint = (s) => translate('designer.hint.'+ s)
export const fieldValidators = [
  {
    // 数字
    value: 'number',
    label: translateHint('numberValidator'),
    regExp: '/^[-]?\\d+(\\.\\d+)?$/',
    defaultErrorMsg: translateHint('numberValidatorErr'),
  },
  {
    // 字母
    value: 'letter',
    label: translateHint('letterValidator'),
    regExp: '/^[A-Za-z]+$/',
    defaultErrorMsg: translateHint('letterValidatorErr'),
  },
  {
    // 字母和数字
    value: 'letterAndNumber',
    label: translateHint('letterAndNumberValidator'),
    regExp: '/^[A-Za-z0-9]+$/',
    defaultErrorMsg: translateHint('letterAndNumberValidatorErr'),
  },
  {
    // 手机号码
    value: 'mobilePhone', 
    label: translateHint('mobilePhoneValidator'),
    regExp: '/^[1][3-9][0-9]{9}$/',
    defaultErrorMsg: translateHint('mobilePhoneValidatorErr'),
  },
  {
    // 电子邮箱
    value: 'email', 
    label: translateHint('emailValidator'),
    regExp: '/^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\\.)+[A-Za-z0-9]{2,3}$/',
    defaultErrorMsg: translateHint('emailValidatorErr'),
  },
  {
    value: 'url', 
    label: translateHint('urlValidator'),
    regExp: '/^([hH][tT]{2}[pP]:\\/\\/|[hH][tT]{2}[pP][sS]:\\/\\/)(([A-Za-z0-9-~]+)\\.)+([A-Za-z0-9-~\\/])+$/',
    defaultErrorMsg: translateHint('urlValidatorErr'),
  },
  {
    // 非中文
    value: 'noChinese', 
    label: translateHint('noChineseValidator'),
    regExp: '/^[^\u4e00-\u9fa5]+$/',
    defaultErrorMsg: translateHint('noChineseValidatorErr'),
  },
  {
    // 中文
    value: 'chinese', 
    label: translateHint('chineseValidator'),
    regExp: '/^[\u4e00-\u9fa5]+$/',
    defaultErrorMsg: translateHint('chineseValidatorErr'),
  },
]


export const getRegExp = function (validatorName) {
  const item =  fieldValidators.find(i => i.value === validatorName)
  if (item) {
    return item.regExp
  }
}

const validateFn = function (validatorName, rule, value, callback, defaultErrorMsg) {
  //空值不校验
  if (isNull(value) || (value.length <= 0)) {
    callback()
    return
  }

  const reg = eval(getRegExp(validatorName))

  if (!reg.test(value)) {
    let errTxt = rule.errorMsg || defaultErrorMsg
    callback(new Error(errTxt))
  } else {
    callback()
  }
}
const getFormValidators = () => {
  const FormValidators = {}
  fieldValidators.forEach(item => {
    FormValidators[item.value] = function (rule, value, callback) {
      validateFn(item.value, rule, value, callback, rule.label + item.defaultErrorMsg)
    }
  })
  return FormValidators
}

export default getFormValidators()
