export function translateApiErrors(error: { code: string; message: string }): {
  input: 'link' | 'shortLink' | 'snackbar'
  message: string
} {
  const errorMessages: {
    [key: string]: { input: 'link' | 'shortLink'; message: string }
  } = {
    SHORT_LINK_ALREADY_EXISTS: {
      input: 'shortLink',
      message: 'Link encurtado já existe',
    },
  }

  return (
    errorMessages[error.code] || {
      input: 'snackbar',
      message: 'Erro desconhecido',
    }
  )
}
