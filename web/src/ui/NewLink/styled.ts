import styled from 'styled-components'

export const NewLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  @media (min-width: 768px) {
    max-width: 380px;
  }
`

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
`
