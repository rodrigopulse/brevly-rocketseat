import * as S from './styled'
import { Button, Input, Text } from '@/components'
import { isValid, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import createLinkService from '@/services/createLinkService'
import { translateApiErrors } from '@/utils/translateApiErrors'
import { useLinksStore } from '@/store/useLinksStore'
import { useSnackbar } from '@/store/useSnackbarStore'
import { useLoader } from '@/store/useLoaderStore'

const schema = z.object({
  link: z
    .string()
    .min(4, 'O link original deve ter pelo menos 4 caracteres')
    .max(200, 'O link original pode ter no máximo 200 caracteres')
    .regex(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/, {
      message: 'Por favor, insira um link válido 1 (ex: www.exemplo.com.br)',
    })
    .regex(/\.[a-zA-Z]{2,}$/, {
      message:
        'O link deve conter um ponto e pelo menos 1 caractere após o ponto',
    }),
  shortLink: z
    .string()
    .min(1, 'O link encurtado é obrigatório')
    .max(20, 'O link encurtado pode ter no máximo 20 caracteres')
    .regex(
      /^[a-zA-Z0-9-_]*$/,
      'O link encurtado só pode conter letras, números, hífens e underlines',
    ),
})

type FormData = z.infer<typeof schema>

export const NewLink: React.FC = () => {
  const {
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      link: '',
      shortLink: '',
    },
  })

  const loader = useLoader()

  const link = watch('link')
  const shortLink = watch('shortLink')
  const { links, setLinks } = useLinksStore()
  const snackbar = useSnackbar()

  const onSubmit = async (data: FormData) => {
    clearErrors()
    loader(true)
    const response = await createLinkService(data)
    if (response.error) {
      if (response.status === 500) {
        snackbar('error', 'Erro interno do servidor')
      }
      const { input, message } = translateApiErrors({
        code: response.code,
        message: response.message,
      })

      if (input === 'snackbar') {
        snackbar('error', message)
      } else {
        setError(input, {
          type: 'manual',
          message,
        })
      }

      loader(false)
      return
    }
    snackbar('success', 'Link criado com sucesso!')
    setLinks([
      {
        count: 0,
        id: response.data.id,
        link: data.link,
        shortLink: data.shortLink,
      },
      ...links,
    ])
    loader(false)

    reset()
  }

  const isButtonDisabled = !isValid || !link || !shortLink

  return (
    <S.NewLink>
      <Text variant="lg">Novo link</Text>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="www.exemplo.com.br"
          label="link original"
          onChange={(e) => setValue('link', e, { shouldValidate: true })}
          onBlur={() => {
            if (link) trigger('link')
          }}
          value={link}
          error={errors.link?.message}
        />
        <Input
          placeholder="brev.ly/"
          label="link encurtado"
          value={shortLink}
          onBlur={() => {
            if (shortLink) trigger('shortLink')
          }}
          onChange={(e) => setValue('shortLink', e, { shouldValidate: true })}
          error={errors.shortLink?.message}
        />
        <Button disabled={isButtonDisabled} label="Salvar link" type="submit" />
      </S.Form>
    </S.NewLink>
  )
}

export default NewLink
