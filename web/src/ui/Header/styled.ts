import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 20px 0;
  flex: none;
  svg {
    width: 96px;
    height: auto;
  }
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 80px 0 20px 0;
  }
`
