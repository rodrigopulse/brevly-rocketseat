import getAllLinksService from '@/services/getAllLinksService'
import * as S from './styled'
import { IconButton, LinkItem, Text } from '@/components'
import { DownloadSimple, Link } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useLinksStore } from '@/store/useLinksStore'
import deleteLinkService from '@/services/deleteLinkService'
import { useSnackbar } from '@/store/useSnackbarStore'
import { useLoader } from '@/store/useLoaderStore'
import exportLinksService from '@/services/exportLinksService'

export const MyLinks: React.FC = () => {
  const [exportLinkUrl, setExportLinkUrl] = useState('')
  const theme = useTheme()
  const { links, setLinks } = useLinksStore()
  const snackbar = useSnackbar()
  const loader = useLoader()

  const getAllLinks = async () => {
    const response = await getAllLinksService()
    if (response.error) {
      snackbar('error', 'Ocorreu um erro ao buscar os links')
      console.error('Erro ao buscar os links:', response.message)
    }
    setLinks(response.data.data)
    loader(false)
  }

  useEffect(() => {
    if (window && exportLinkUrl) {
      window.open(exportLinkUrl, '_blank')
    }
  }, [exportLinkUrl])

  const exportLinks = async () => {
    loader(true)
    const response = await exportLinksService()
    if (response.error) {
      loader(false)
      snackbar('error', 'Ocorreu um erro ao exportar os links')
      console.error('Erro ao exportar os links:', response.message)
    }
    setExportLinkUrl(response.data.url)
    loader(false)
  }

  const deleteLink = async (id: string) => {
    loader(true)
    const response = await deleteLinkService(id)
    if (response.error) {
      snackbar('error', 'Erro ao deletar o link')
      console.error('Erro ao deletar o link:', response.message)
    }
    getAllLinks()
  }

  useEffect(() => {
    getAllLinks()
  }, [])

  return (
    <S.MyLinks>
      <S.Header>
        <Text variant="lg">Meus links</Text>
        <IconButton
          width="auto"
          onClick={() => exportLinks()}
          icon={<DownloadSimple size={16} color={theme.colors.gray500} />}
          label="Baixar CSV"
        />
      </S.Header>
      <S.Content>
        {links.length > 0 ? (
          links.map((link) => (
            <LinkItem
              deleteLink={(id) => deleteLink(id)}
              id={link.id}
              key={link.shortLink}
              accessCount={link.count}
              link={link.link}
              shortLink={link.shortLink}
            />
          ))
        ) : (
          <S.EmptyState>
            <Link size={32} color={theme.colors.gray400} />
            <Text variant="xs">AINDA NÃO EXISTEM LINKS CADASTRADOS</Text>
          </S.EmptyState>
        )}
      </S.Content>
    </S.MyLinks>
  )
}

export default MyLinks
