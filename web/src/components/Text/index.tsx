import type { ReactNode } from 'react'
import * as S from './styled'

type TextProps = {
  variant?: 'xl' | 'lg' | 'md' | 'sm' | 'sm-b' | 'xs'
  children: ReactNode
  color?: string
}

export const Text: React.FC<TextProps> = ({ children, variant, color }) => {
  return (
    <S.Text color={color} variant={variant ?? 'sm'}>
      {children}
    </S.Text>
  )
}

export default Text
