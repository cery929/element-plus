import { buildProps } from '@cery929-ui/utils'
import { componentSizes } from '@cery929-ui/constants'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type Jumper from './jumper.vue'

export const paginationJumperProps = buildProps({
  size: {
    type: String,
    values: componentSizes,
  },
} as const)

export type PaginationJumperProps = ExtractPropTypes<
  typeof paginationJumperProps
>
export type PaginationJumperPropsPublic = ExtractPublicPropTypes<
  typeof paginationJumperProps
>

export type PaginationJumperInstance = InstanceType<typeof Jumper> & unknown
