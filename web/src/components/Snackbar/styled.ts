import { styled } from 'styled-components'

export const Snackbar = styled.div<{ message: string }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  padding: 10px 20px;
  display: ${({ message }) => (message === '' ? 'none' : 'flex')};
  transition: all 0.2s ease-in-out;
  align-items: center;
  gap: 10px;
`

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray500};
`
