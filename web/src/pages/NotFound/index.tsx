import NotFoundIcon from '@/components/Icons/NotFound'
import * as S from './styled'
import { Text, Wrapper } from '@/components'

export function NotFound() {
  return (
    <S.NotFound>
      <Wrapper>
        <S.Container>
          <S.Content>
            <NotFoundIcon />
            <Text variant="xl" color="gray600">
              Link não encontrado
            </Text>
            <Text variant="md" color="gray500">
              O link que você está tentando acessar não existe, foi removido ou
              é uma URL inválida. Saiba mais em <a href="/">brev.ly</a>.
            </Text>
          </S.Content>
        </S.Container>
      </Wrapper>
    </S.NotFound>
  )
}

export default NotFound
