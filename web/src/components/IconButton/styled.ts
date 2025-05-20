import styled from 'styled-components'

export const IconButton = styled.button<{ width?: string }>`
  width: ${({ width }) => width ?? '32px'};
  height: 32px;
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.blueBase};
  }
`

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray500};
  font-weight: 500;
`
