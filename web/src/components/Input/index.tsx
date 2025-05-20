import { useTheme } from 'styled-components'
import * as S from './styled'
import { Warning } from '@phosphor-icons/react'

type InputProps = {
  placeholder?: string
  label: string
  error?: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  error,
  value,
  onChange,
  onBlur,
}) => {
  const theme = useTheme()
  return (
    <S.InputContainer>
      <S.Label error={error}>{label}</S.Label>
      <S.Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        error={error}
        placeholder={placeholder}
        onBlur={() => {
          if (onBlur) onBlur()
        }}
      />
      {error && (
        <S.Error>
          <Warning size={16} color={theme.colors.danger} /> {error}
        </S.Error>
      )}
    </S.InputContainer>
  )
}
