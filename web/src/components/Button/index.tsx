import { useTheme } from 'styled-components'
import * as S from './styled'
import Text from '@components/Text'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  label: string
  leftIcon?: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  disabled,
  type,
  label,
  onClick,
  leftIcon,
}) => {
  const theme = useTheme()
  return (
    <S.Button
      variant={variant ?? 'primary'}
      disabled={disabled ?? false}
      type={type ?? 'button'}
      aria-label={label}
      aria-disabled={disabled ?? false}
      aria-pressed={disabled ?? false}
      aria-hidden={disabled ?? false}
      onClick={onClick}
    >
      {(leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>) ?? undefined}
      <Text
        color={theme.colors.white}
        variant={variant === 'primary' ? 'md' : 'sm-b'}
      >
        {label}
      </Text>
    </S.Button>
  )
}

export default Button
