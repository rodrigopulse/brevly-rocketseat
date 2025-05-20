import { useTheme } from 'styled-components'
import * as S from './styled'
import { Warning } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { useSnackbar, useSnackbarStore } from '@/store/useSnackbarStore'

export const Snackbar: React.FC = () => {
  const theme = useTheme()
  const { message, show, type } = useSnackbarStore(
    (state) => state.snackbarState,
  )
  const snackbar = useSnackbar()

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        snackbar('success', '', false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [show])

  if (!show) {
    return undefined
  }

  return (
    <S.Snackbar message={message}>
      <Warning
        size={18}
        color={type === 'error' ? theme.colors.danger : theme.colors.success}
      />
      <S.Message>{message}</S.Message>
    </S.Snackbar>
  )
}
