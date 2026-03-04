import installer from './defaults'

export * from '@kn-ui/components'
export * from '@kn-ui/constants'
export * from '@kn-ui/directives'
export * from '@kn-ui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
