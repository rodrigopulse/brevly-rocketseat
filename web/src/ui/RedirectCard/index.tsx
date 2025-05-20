import LogoIcon from '@/components/Icons/LogoIcon'
import { useTheme } from 'styled-components'
import { Text } from '@/components'
import * as S from './styled'

type RedirectCardProps = {
  link: string | undefined
}

export const RedirectCard: React.FC<RedirectCardProps> = ({ link }) => {
  const theme = useTheme()

  return (
    <S.RedirectCard>
      <LogoIcon />
      <Text variant="xl" color={theme.colors.gray600}>
        Redirecionando...
      </Text>
      <S.TextContainer>
        <Text variant="md" color={theme.colors.gray500}>
          O link será aberto automaticamente em alguns instantes.
        </Text>
        {link && (
          <Text variant="md" color={theme.colors.gray500}>
            Não foi redirecionado? <a href={link}>Acesse aqui</a>
          </Text>
        )}
      </S.TextContainer>
    </S.RedirectCard>
  )
}
