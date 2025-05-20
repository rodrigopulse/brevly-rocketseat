import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
`

export const Input = styled.input<{ error?: string }>`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.danger : theme.colors.gray300};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  caret-color: ${({ theme }) => theme.colors.blueBase};
  color: ${({ theme }) => theme.colors.gray600};
  transition: all 0.1s ease-in-out;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blueBase};
    box-shadow: none;
  }
`

export const Label = styled.label<{ error?: string }>`
  display: block;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: ${({ error }) => (error ? 700 : 400)};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme, error }) =>
    error ? theme.colors.danger : theme.colors.gray500};
  transition: all 0.1s ease-in-out;
  &:has(+ input:focus) {
    color: ${({ theme }) => theme.colors.blueBase};
    font-weight: 700;
  }
`

export const Error = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 4px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray500};
`
