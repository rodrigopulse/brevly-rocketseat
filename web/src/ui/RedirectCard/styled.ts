import styled from 'styled-components'

export const RedirectCard = styled.div`
  width: 100%;
  max-width: 580px;
  height: auto;
  padding: 30px;
  border-radius: 8px;
  gap: 20px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  text-align: center;
  a {
    color: ${({ theme }) => theme.colors.blueBase};
  }
`
