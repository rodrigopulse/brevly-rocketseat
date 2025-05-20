import * as S from './styled'
import { IconButton } from '@/components'
import { Copy, Trash, Check } from '@phosphor-icons/react'
import { useState } from 'react'

type LinkItemProps = {
  id: string
  shortLink: string
  link: string
  accessCount: number
  deleteLink: (id: string) => void
}

export const LinkItem: React.FC<LinkItemProps> = ({
  id,
  shortLink,
  link,
  accessCount,
  deleteLink,
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(`brev.ly/${shortLink}`).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    })
  }

  return (
    <S.LinkItem>
      <S.LinkInfo>
        <S.ShortUrl href={`/redirect/${shortLink}`}>
          brev.ly/{shortLink}
        </S.ShortUrl>
        <S.DestinationUrl>{link}</S.DestinationUrl>
      </S.LinkInfo>
      <S.Right>
        <S.AccessCount>{accessCount} acessos</S.AccessCount>
        <S.Actions>
          <IconButton
            onClick={handleCopy}
            icon={isCopied ? <Check /> : <Copy />}
          />
          <IconButton onClick={() => deleteLink(id)} icon={<Trash />} />
        </S.Actions>
      </S.Right>
    </S.LinkItem>
  )
}

export default LinkItem
