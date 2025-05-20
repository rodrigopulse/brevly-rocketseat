import { createGlobalStyle } from 'styled-components'

const ResetStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color:  ${({ theme }) => theme.colors.gray200};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: inherit;
  }
  p,
  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
  button: {
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
`

export default ResetStyles
