import { buildProps } from '@cery929-ui/utils'

export const COMPONENT_NAME = 'ElOption'
export const optionProps = buildProps({
  /**
   * @description value of option
   */
  value: {
    type: [String, Number, Boolean, Object],
    required: true as const,
  },
  /**
   * @description label of option, same as `value` if omitted
   */
  label: {
    type: [String, Number],
  },
  created: Boolean,
  /**
   * @description whether option is disabled
   */
  disabled: Boolean,
})
