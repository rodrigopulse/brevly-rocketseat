import { useLoaderStore } from '@/store/useLoaderStore'
import styled, { keyframes } from 'styled-components'

export const FullScreenLoader = () => {
  const { show } = useLoaderStore((state) => state.loaderState)

  if (!show) {
    return undefined
  }

  return (
    <LoaderContainer>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </LoaderContainer>
  )
}

export default FullScreenLoader

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`

const Dots = styled.div`
  display: flex;
  gap: 8px;
`

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.blueBase || '#3498db'};
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
  &:nth-child(3) {
    animation-delay: 0;
  }
`
