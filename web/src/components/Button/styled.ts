import styled from 'styled-components'
import theme from '../../styles/theme'

export const Button = styled.button<{
  variant: 'primary' | 'secondary'
  disabled?: boolean
}>`
  width: ${({ variant }) => (variant === 'primary' ? '100%' : 'auto')};
  padding: 0 8px;
  height: ${({ variant }) => (variant === 'primary' ? '48px' : '32px')};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ variant }) => (variant === 'primary' ? theme.colors.white : theme.colors.gray500)};
  border: 1px solid ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.blueBase : theme.colors.gray200};
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.blueBase : theme.colors.gray200};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.blueDark : theme.colors.gray200};
      border-color: ${({ variant, theme }) => (variant === 'primary' ? theme.colors.blueBase : theme.colors.blueDark)};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const LeftIcon = styled.div`
  margin-right: 6px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`
