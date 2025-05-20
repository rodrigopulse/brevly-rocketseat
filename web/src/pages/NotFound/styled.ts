import styled from 'styled-components'

export const NotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 580px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 48px;
  background: #fff;
  border-radius: 8px;
  text-align: center;
  svg {
    width: 164px;
    height: 72px;
  }
  a {
    color: ${({ theme }) => theme.colors.blueBase};
  }
  @media (min-width: 768px) {
    gap: 24px;
    padding: 64px 48px;
    svg {
      width: 194px;
      height: 85px;
    }
  }
`
