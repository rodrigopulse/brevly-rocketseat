import styled from 'styled-components'

export const Text = styled.p<{
  variant: 'xl' | 'md' | 'sm' | 'sm-b' | 'xs' | 'lg'
  color?: string
}>`
  color: ${({ theme, color }) => color ?? theme.colors.gray600};
  font-size: ${({ variant }) => {
    switch (variant) {
      case 'xl':
        return '2.4rem'
      case 'lg':
        return '1.8rem'
      case 'md':
        return '1.4rem'
      case 'sm':
        return '1.2rem'
      case 'sm-b':
        return '1.2rem'
      case 'xs':
        return '1rem'
    }
  }};
  line-height: ${({ variant }) => {
    switch (variant) {
      case 'xl':
        return '3.2rem'
      case 'lg':
        return '2.4rem'
      case 'md':
        return '1.8rem'
      case 'sm':
        return '1.6rem'
      case 'xs':
        return '1.4rem'
    }
  }};
  font-weight: ${({ variant }) => {
    switch (variant) {
      case 'xl':
        return '700'
      case 'lg':
        return '700'
      case 'md':
        return '600'
      case 'sm':
        return '400'
      case 'sm-b':
        return '600'
      case 'xs':
        return '400'
    }
  }};
  text-transform: ${({ variant }) => {
    return variant === 'xs' ? 'uppercase' : 'none'
  }};
`
