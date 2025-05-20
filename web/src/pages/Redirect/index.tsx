import { RedirectCard } from '@/ui/RedirectCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getShortLinkService } from '@/services/getShortLinkService'
import * as S from './styled'
import createCountLinkService from '@/services/createCountLinkService'
import { useSnackbar } from '@/store/useSnackbarStore'

export function Redirect() {
  const { shortLink } = useParams<{ shortLink: string }>()
  const [link, setLink] = useState<string>('')
  const snackbar = useSnackbar()

  const getLink = async () => {
    const response = await getShortLinkService(shortLink as string)
    if (response.error) {
      if (response.status === 404) {
        window.location.href = '/404'
      }
      if (response.status === 500) {
        snackbar('error', 'Erro interno do servidor')
      }
      if (response.status === 400) {
        snackbar('error', 'Ocorreu um erro ao redirecionar')
      }
    }

    const createCount = await createCountLinkService(response.data.id)
    if (createCount.error) {
      console.error('Error creating count link', response.data.id)
    }

    if (!response.data.link.includes('https://')) {
      response.data.link = `https://${response.data.link}`
    }

    window.location.href = response.data.link
    setLink(response.data.link)
  }

  useEffect(() => {
    getLink()
  }, [])

  return (
    <S.Container>
      <RedirectCard link={link} />
    </S.Container>
  )
}

export default Redirect
