import axios from 'axios'
import api from './api'

export async function exportLinksService() {
  try {
    const response = await api.get(
      `${import.meta.env.VITE_BACKEND_URL}/links/export`,
    )
    return { data: response.data, error: false }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data?.code) {
        const { code, message } = error.response.data
        return {
          data: null,
          error: true,
          status: error.response.status,
          code,
          message,
        }
      }
      return {
        data: null,
        error: true,
        status: error.status,
        code: error.code,
        message: error.message,
      }
    }
    return { data: null, error: true, message: 'Erro desconhecido' }
  }
}

export default exportLinksService
