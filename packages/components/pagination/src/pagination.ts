import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  provide,
  ref,
  watch,
} from 'vue'
import { ArrowLeft, ArrowRight } from '@kn-ui/icons-vue'
import {
  buildProps,
  debugWarn,
  definePropType,
  iconPropType,
  isNumber,
  mutable,
} from '@kn-ui/utils'
import {
  useDeprecated,
  useGlobalSize,
  useLocale,
  useNamespace,
  useSizeProp,
} from '@kn-ui/hooks'
import { CHANGE_EVENT } from '@kn-ui/constants'
import { elPaginationKey } from './constants'
import Prev from './components/prev.vue'
import Next from './components/next.vue'
import Sizes from './components/sizes.vue'
import Jumper from './components/jumper.vue'
import Total from './components/total.vue'
import Pager from './components/pager.vue'

import type {
  CSSProperties,
  ExtractPropTypes,
  ExtractPublicPropTypes,
  VNode,
} from 'vue'
/**
 * It it user's responsibility to guarantee that the value of props.total... is number
 * (same as pageSize, defaultPageSize, currentPage, defaultCurrentPage, pageCount)
 * Otherwise we can reasonable infer that the corresponding field is absent
 */
const isAbsent = (v: unknown): v is undefined => typeof v !== 'number'

type LayoutKey =
  | 'prev'
  | 'pager'
  | 'next'
  | 'jumper'
  | '->'
  | 'total'
  | 'sizes'
  | 'slot'

export const paginationProps = buildProps({
  /**
   * @description options of item count per page
   */
  pageSize: Number,
  /**
   * @description default initial value of page size, not setting is the same as setting 10
   */
  defaultPageSize: Number,
  /**
   * @description total item count
   */
  total: Number,
  /**
   * @description total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required
   */
  pageCount: Number,
  /**
   * @description number of pagers. Pagination collapses when the total page count exceeds this value
   */
  pagerCount: {
    type: Number,
    validator: (value: unknown) => {
      return (
        isNumber(value) &&
        Math.trunc(value) === value &&
        value > 4 &&
        value < 22 &&
        value % 2 === 1
      )
    },
    default: 7,
  },
  /**
   * @description current page number
   */
  currentPage: Number,
  /**
   * @description default initial value of current-page, not setting is the same as setting 1
   */
  defaultCurrentPage: Number,
  /**
   * @description layout of Pagination, elements separated with a comma
   */
  layout: {
    type: String,
    default: (
      ['prev', 'pager', 'next', 'jumper', '->', 'total'] as LayoutKey[]
    ).join(', '),
  },
  /**
   * @description item count of each page
   */
  pageSizes: {
    type: definePropType<number[]>(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100] as const),
  },
  /**
   * @description custom class name for the page size Select's dropdown
   */
  popperClass: {
    type: String,
    default: '',
  },
  /**
   * @description custom style for the page size Select's dropdown
   */
  popperStyle: {
    type: definePropType<string | CSSProperties>([String, Object]),
  },
  /**
   * @description text for the prev button
   */
  prevText: {
    type: String,
    default: '',
  },
  /**
   * @description icon for the prev button, higher priority of `prev-text`
   */
  prevIcon: {
    type: iconPropType,
    default: () => ArrowLeft,
  },
  /**
   * @description text for the next button
   */
  nextText: {
    type: String,
    default: '',
  },
  /**
   * @description icon for the next button, higher priority of `next-text`
   */
  nextIcon: {
    type: iconPropType,
    default: () => ArrowRight,
  },
  /**
   * @description whether Pagination size is teleported to body
   */
  teleported: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to use small pagination
   */
  small: Boolean,
  /**
   * @description set page size
   */
  size: useSizeProp,
  /**
   * @description whether the buttons have a background color
   */
  background: Boolean,
  /**
   * @description whether Pagination is disabled
   */
  disabled: Boolean,
  /**
   * @description whether to hide when there's only one page
   */
  hideOnSinglePage: Boolean,
  /**
   * @description which element the size dropdown appends to.
   */
  appendSizeTo: String,
  /**
   * @description whether to center the prev, pager, and next controls
   */
  centerControls: Boolean,
} as const)
export type PaginationProps = ExtractPropTypes<typeof paginationProps>
export type PaginationPropsPublic = ExtractPublicPropTypes<
  typeof paginationProps
>

export const paginationEmits = {
  'update:current-page': (val: number) => isNumber(val),
  'update:page-size': (val: number) => isNumber(val),
  'size-change': (val: number) => isNumber(val),
  change: (currentPage: number, pageSize: number) =>
    isNumber(currentPage) && isNumber(pageSize),
  'current-change': (val: number) => isNumber(val),
  'prev-click': (val: number) => isNumber(val),
  'next-click': (val: number) => isNumber(val),
}
export type PaginationEmits = typeof paginationEmits

const componentName = 'ElPagination'
export default defineComponent({
  name: componentName,

  props: paginationProps,
  emits: paginationEmits,

  setup(props, { emit, slots }) {
    const { t } = useLocale()
    const ns = useNamespace('pagination')
    const vnodeProps = getCurrentInstance()!.vnode.props || {}
    const _globalSize = useGlobalSize()
    const _size = computed(() =>
      props.small ? 'small' : (props.size ?? _globalSize.value)
    )
    useDeprecated(
      {
        from: 'small',
        replacement: 'size',
        version: '3.0.0',
        scope: 'el-pagination',
        ref: 'https://element-plus.org/zh-CN/component/pagination.html',
      },
      computed(() => !!props.small)
    )
    // we can find @xxx="xxx" props on `vnodeProps` to check if user bind corresponding events
    const hasCurrentPageListener =
      'onUpdate:currentPage' in vnodeProps ||
      'onUpdate:current-page' in vnodeProps ||
      'onCurrentChange' in vnodeProps
    const hasPageSizeListener =
      'onUpdate:pageSize' in vnodeProps ||
      'onUpdate:page-size' in vnodeProps ||
      'onSizeChange' in vnodeProps
    const assertValidUsage = computed(() => {
      // Users have to set either one, otherwise count of pages cannot be determined
      if (isAbsent(props.total) && isAbsent(props.pageCount)) return false
      // <el-pagination ...otherProps :current-page="xxx" /> without corresponding listener is forbidden now
      // Users have to use two way binding of `currentPage`
      // If users just want to provide a default value, `defaultCurrentPage` is here for you
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener) return false
      // When you want to change sizes, things get more complex, detailed below
      // Basically the most important value we need is page count
      // either directly from props.pageCount
      // or calculated from props.total
      // we will take props.pageCount precedence over props.total
      if (props.layout.includes('sizes')) {
        if (!isAbsent(props.pageCount)) {
          // if props.pageCount is assign by user, then user have to watch pageSize change
          // and recalculate pageCount
          if (!hasPageSizeListener) return false
        } else if (!isAbsent(props.total)) {
          // Otherwise, we will see if user have props.pageSize defined
          // If so, meaning user want to have pageSize controlled himself/herself from component
          // Thus page size listener is required
          // users are account for page size change
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false
            }
          } else {
            // (else block just for explaination)
            // else page size is controlled by el-pagination internally
          }
        }
      }
      return true
    })

    const innerPageSize = ref(
      isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize
    )
    const innerCurrentPage = ref(
      isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage
    )

    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize
      },
      set(v: number) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v
        }
        if (hasPageSizeListener) {
          emit('update:page-size', v)
          emit('size-change', v)
        }
      },
    })

    const pageCountBridge = computed<number>(() => {
      let pageCount = 0
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value))
      }
      return pageCount
    })

    const currentPageBridge = computed<number>({
      get() {
        return isAbsent(props.currentPage)
          ? innerCurrentPage.value
          : props.currentPage
      },
      set(v) {
        let newCurrentPage = v
        if (v < 1) {
          newCurrentPage = 1
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage
        }
        if (hasCurrentPageListener) {
          emit('update:current-page', newCurrentPage)
          emit('current-change', newCurrentPage)
        }
      },
    })

    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val) currentPageBridge.value = val
    })

    watch(
      [currentPageBridge, pageSizeBridge],
      (value) => {
        emit(CHANGE_EVENT, ...value)
      },
      { flush: 'post' }
    )

    function handleCurrentChange(val: number) {
      currentPageBridge.value = val
    }

    function handleSizeChange(val: number) {
      pageSizeBridge.value = val
      const newPageCount = pageCountBridge.value
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount
      }
    }

    function prev() {
      if (props.disabled) return
      currentPageBridge.value -= 1
      emit('prev-click', currentPageBridge.value)
    }

    function next() {
      if (props.disabled) return
      currentPageBridge.value += 1
      emit('next-click', currentPageBridge.value)
    }

    function addClass(element: any, cls: string) {
      if (element) {
        if (!element.props) {
          element.props = {}
        }
        element.props.class = [element.props.class, cls].join(' ')
      }
    }

    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange,
    })

    return () => {
      if (!assertValidUsage.value) {
        debugWarn(componentName, t('el.pagination.deprecationWarning'))
        return null
      }
      if (!props.layout) return null
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null

      const rootChildren: Array<VNode | VNode[] | null> = []
      const leftWrapperChildren: Array<VNode | VNode[] | null> = []
      const rightWrapperChildren: Array<VNode | VNode[] | null> = []
      const centerWrapperChildren: Array<VNode | VNode[] | null> = []

      let currentWrapper: 'left' | 'center' | 'right' = 'left'

      const TEMPLATE_MAP: Record<
        Exclude<LayoutKey, '->'>,
        VNode | VNode[] | null
      > = {
        prev: h(Prev, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          prevIcon: props.prevIcon,
          onClick: prev,
        }),
        jumper: h(Jumper, {
          size: _size.value,
        }),
        pager: h(Pager, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled,
        }),
        next: h(Next, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          nextIcon: props.nextIcon,
          onClick: next,
        }),
        sizes: h(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          popperStyle: props.popperStyle,
          disabled: props.disabled,
          teleported: props.teleported,
          size: _size.value,
          appendSizeTo: props.appendSizeTo,
        }),
        slot: slots?.default?.() ?? null,
        total: h(Total, { total: isAbsent(props.total) ? 0 : props.total }),
      }

      const components = props.layout
        .split(',')
        .map((item: string) => item.trim()) as LayoutKey[]

      // 解析布局，根据 centerControls 决定如何分配组件
      if (props.centerControls) {
        // 居中模式：使用三个区域（左、中、右）
        components.forEach((c) => {
          if (c === '->') {
            // 遇到 -> 切换到右区域
            currentWrapper = 'right'
            return
          }

          // 判断是否是控制组件
          const isControl = c === 'prev' || c === 'pager' || c === 'next'

          if (isControl) {
            // 控制组件始终放在中间区域
            centerWrapperChildren.push(TEMPLATE_MAP[c])
          } else if (currentWrapper === 'left') {
            // 非控制组件在遇到 -> 之前放在左边
            leftWrapperChildren.push(TEMPLATE_MAP[c])
          } else {
            // 非控制组件在遇到 -> 之后放在右边
            rightWrapperChildren.push(TEMPLATE_MAP[c])
          }
        })

        // 添加左边区域（如果有内容）
        if (leftWrapperChildren.length > 0) {
          addClass(leftWrapperChildren[0], ns.is('first'))
          addClass(
            leftWrapperChildren[leftWrapperChildren.length - 1],
            ns.is('last')
          )
          rootChildren.push(
            h('div', { class: ns.e('leftwrapper') }, leftWrapperChildren)
          )
        }

        // 添加中间区域（控制组件）
        if (centerWrapperChildren.length > 0) {
          addClass(centerWrapperChildren[0], ns.is('first'))
          addClass(
            centerWrapperChildren[centerWrapperChildren.length - 1],
            ns.is('last')
          )
          rootChildren.push(
            h('div', { class: ns.e('centerwrapper') }, centerWrapperChildren)
          )
        }

        // 添加右边区域（如果有内容）
        if (rightWrapperChildren.length > 0) {
          addClass(rightWrapperChildren[0], ns.is('first'))
          addClass(
            rightWrapperChildren[rightWrapperChildren.length - 1],
            ns.is('last')
          )
          rootChildren.push(
            h('div', { class: ns.e('rightwrapper') }, rightWrapperChildren)
          )
        }
      } else {
        // 原始模式：只有左右区域
        let haveRightWrapper = false

        components.forEach((c) => {
          if (c === '->') {
            haveRightWrapper = true
            return
          }
          if (!haveRightWrapper) {
            rootChildren.push(TEMPLATE_MAP[c])
          } else {
            rightWrapperChildren.push(TEMPLATE_MAP[c])
          }
        })

        addClass(rootChildren[0], ns.is('first'))
        addClass(rootChildren[rootChildren.length - 1], ns.is('last'))

        if (haveRightWrapper && rightWrapperChildren.length > 0) {
          addClass(rightWrapperChildren[0], ns.is('first'))
          addClass(
            rightWrapperChildren[rightWrapperChildren.length - 1],
            ns.is('last')
          )
          rootChildren.push(
            h('div', { class: ns.e('rightwrapper') }, rightWrapperChildren)
          )
        }
      }

      return h(
        'div',
        {
          class: [
            ns.b(),
            ns.is('background', props.background),
            ns.m(_size.value),
            {
              [ns.m('center-controls')]: props.centerControls,
            },
          ],
        },
        rootChildren
      )
    }
  },
})
