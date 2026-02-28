import installer from './defaults'

export * from '@cery929-ui/components'
export * from '@cery929-ui/constants'
export * from '@cery929-ui/directives'
export * from '@cery929-ui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
