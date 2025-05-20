import styled from 'styled-components'

export const MyLinks = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  @media (min-width: 768px) {
    width: 100%;
    max-width: calc(100% - 400px);
    margin: 0 auto;
  }
`

export const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`

export const Content = styled.div`
  width: 100%;
  height: auto;
`
export const EmptyState = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
`
