import axios from 'axios'
import { api } from './api'

export type LinkPayload = {
  link: string
  shortLink: string
}

export async function createLinkService(payload: LinkPayload) {
  try {
    const response = await api.post(
      `${import.meta.env.VITE_BACKEND_URL}/links`,
      payload,
    )
    return { data: response.data, error: false, status: response.status }
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

export default createLinkService
