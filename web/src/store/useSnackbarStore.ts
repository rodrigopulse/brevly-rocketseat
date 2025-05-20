import { create } from 'zustand'

interface Snackbar {
  type: 'error' | 'success'
  message: string
  show: boolean
}

interface SnackbarStore {
  snackbarState: Snackbar
  snackbar: (
    type?: 'error' | 'success',
    message?: string,
    show?: boolean,
  ) => void
}

export const useSnackbarStore = create<SnackbarStore>((set) => ({
  snackbarState: {
    type: 'success',
    message: '',
    show: false,
  },
  snackbar: (type = 'success', message = '', show) =>
    set({
      snackbarState: {
        type,
        message,
        show: show ?? true,
      },
    }),
}))

export const useSnackbar = () => {
  const { snackbar } = useSnackbarStore()
  return snackbar
}
