import { ThemeType } from './theme'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeType['colors']
    fontSizes: ThemeType['fontSizes']
  }
}
