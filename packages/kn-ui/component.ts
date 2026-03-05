import { ElAffix } from '@kn-ui/components/affix'
import { ElAlert } from '@kn-ui/components/alert'
import { ElAutocomplete } from '@kn-ui/components/autocomplete'
import { ElAvatar, ElAvatarGroup } from '@kn-ui/components/avatar'
import { ElBacktop } from '@kn-ui/components/backtop'
import { ElBadge } from '@kn-ui/components/badge'
import { ElBreadcrumb, ElBreadcrumbItem } from '@kn-ui/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@kn-ui/components/button'
import { ElCalendar } from '@kn-ui/components/calendar'
import { ElCard } from '@kn-ui/components/card'
import { ElCarousel, ElCarouselItem } from '@kn-ui/components/carousel'
import { ElCascader } from '@kn-ui/components/cascader'
import { ElCascaderPanel } from '@kn-ui/components/cascader-panel'
import { ElCheckTag } from '@kn-ui/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@kn-ui/components/checkbox'
import { ElCol } from '@kn-ui/components/col'
import { ElCollapse, ElCollapseItem } from '@kn-ui/components/collapse'
import { ElCollapseTransition } from '@kn-ui/components/collapse-transition'
import { ElColorPickerPanel } from '@kn-ui/components/color-picker-panel'
import { ElColorPicker } from '@kn-ui/components/color-picker'
import { ElConfigProvider } from '@kn-ui/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@kn-ui/components/container'
import { ElDatePicker } from '@kn-ui/components/date-picker'
import { ElDatePickerPanel } from '@kn-ui/components/date-picker-panel'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@kn-ui/components/descriptions'
import { ElDialog } from '@kn-ui/components/dialog'
import { ElDivider } from '@kn-ui/components/divider'
import { ElDrawer } from '@kn-ui/components/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@kn-ui/components/dropdown'
import { ElEmpty } from '@kn-ui/components/empty'
import { ElForm, ElFormItem } from '@kn-ui/components/form'
import { ElIcon } from '@kn-ui/components/icon'
import { ElImage } from '@kn-ui/components/image'
import { ElImageViewer } from '@kn-ui/components/image-viewer'
import { ElInput } from '@kn-ui/components/input'
import { ElInputNumber } from '@kn-ui/components/input-number'
import { ElInputTag } from '@kn-ui/components/input-tag'
import { ElLink } from '@kn-ui/components/link'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from '@kn-ui/components/menu'
import { ElPageHeader } from '@kn-ui/components/page-header'
import { ElPagination } from '@kn-ui/components/pagination'
import { ElPopconfirm } from '@kn-ui/components/popconfirm'
import { ElPopover } from '@kn-ui/components/popover'
import { ElPopper } from '@kn-ui/components/popper'
import { ElProgress } from '@kn-ui/components/progress'
import { ElRadio, ElRadioButton, ElRadioGroup } from '@kn-ui/components/radio'
import { ElRate } from '@kn-ui/components/rate'
import { ElResult } from '@kn-ui/components/result'
import { ElRow } from '@kn-ui/components/row'
import { ElScrollbar } from '@kn-ui/components/scrollbar'
import { ElOption, ElOptionGroup, ElSelect } from '@kn-ui/components/select'
import { ElSelectV2 } from '@kn-ui/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@kn-ui/components/skeleton'
import { ElSlider } from '@kn-ui/components/slider'
import { ElSpace } from '@kn-ui/components/space'
import { ElStatistic } from '@kn-ui/components/statistic'
import { ElCountdown } from '@kn-ui/components/countdown'
import { ElStep, ElSteps } from '@kn-ui/components/steps'
import { ElSwitch } from '@kn-ui/components/switch'
import { ElTable, ElTableColumn } from '@kn-ui/components/table'
import { ElAutoResizer, ElTableV2 } from '@kn-ui/components/table-v2'
import { ElTabPane, ElTabs } from '@kn-ui/components/tabs'
import { ElTag } from '@kn-ui/components/tag'
import { ElText } from '@kn-ui/components/text'
import { ElTimePicker } from '@kn-ui/components/time-picker'
import { ElTimeSelect } from '@kn-ui/components/time-select'
import { ElTimeline, ElTimelineItem } from '@kn-ui/components/timeline'
import { ElTooltip } from '@kn-ui/components/tooltip'
import { ElTransfer } from '@kn-ui/components/transfer'
import { ElTree } from '@kn-ui/components/tree'
import { ElTreeSelect } from '@kn-ui/components/tree-select'
import { ElTreeV2 } from '@kn-ui/components/tree-v2'
import { ElUpload } from '@kn-ui/components/upload'
import { ElWatermark } from '@kn-ui/components/watermark'
import { ElTour, ElTourStep } from '@kn-ui/components/tour'
import { ElAnchor, ElAnchorLink } from '@kn-ui/components/anchor'
import { ElSegmented } from '@kn-ui/components/segmented'
import { ElMention } from '@kn-ui/components/mention'
import { ElSplitter, ElSplitterPanel } from '@kn-ui/components/splitter'

import type { Plugin } from 'vue'

export default [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
  ElAvatar,
  ElAvatarGroup,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPickerPanel,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDatePickerPanel,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElInputTag,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElStatistic,
  ElCountdown,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElText,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
  ElWatermark,
  ElTour,
  ElTourStep,
  ElAnchor,
  ElAnchorLink,
  ElSegmented,
  ElMention,
  ElSplitter,
  ElSplitterPanel,
] as Plugin[]
