import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0 10px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
