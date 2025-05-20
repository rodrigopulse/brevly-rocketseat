import styled from 'styled-components'

export const LinkItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-radius: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  &:last-child {
    border-bottom: none;
  }
`

export const LinkInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const ShortUrl = styled.a`
  color: ${({ theme }) => theme.colors.blueBase};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  &:hover {
    text-decoration: underline;
  }
`

export const DestinationUrl = styled.span`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`

export const AccessCount = styled.div`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  white-space: nowrap;
`

export const Actions = styled.div`
  display: flex;
  gap: 5px;
`

export const Right = styled.div`
  width: auto;
  display: flex;
  gap: 10px;
  padding-left: 5px;
  align-items: center;
  flex-shrink: 0;
`
