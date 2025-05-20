import { useTheme } from 'styled-components'
import * as S from './styled'
import { Text } from '@/components'

type IconButtonProps = {
  icon: React.ReactNode
  onClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  label?: string
  width?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  disabled,
  type,
  label,
  width,
}) => {
  const theme = useTheme()
  return (
    <S.IconButton
      width={width}
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label && (
        <Text color={theme.colors.gray500} variant="sm-b">
          {label}
        </Text>
      )}
    </S.IconButton>
  )
}

export default IconButton
