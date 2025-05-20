import axios from 'axios'
import api from './api'

export const getShortLinkService = async (link: string) => {
  try {
    const response = await api.get(
      `${import.meta.env.VITE_API_URL}/links/shortlink/${link}`,
    )
    return { data: response.data.data, error: false, status: response.status }
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
