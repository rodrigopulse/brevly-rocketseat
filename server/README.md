# Brev.ly

[![Figma](https://img.shields.io/badge/Figma-Design-blue?logo=figma)](https://www.figma.com/file/SEU_LINK_AQUI/Brevly-Design)

## 🚀 Ambiente de Desenvolvimento

Para evitar que o Docker agrupe os containers sob o nome padrão do diretório (`server`) no Docker Desktop, você pode especificar um nome de projeto personalizado ao subir os serviços:

```bash
docker compose --project-name brevly up
```

# 📦 API de Encurtamento de URLs – Brevly

Neste projeto back-end, será desenvolvido uma API para gerenciar o encurtamento de URLs.

---

## ✅ Funcionalidades e Regras

- Deve ser possível **criar um link**
  - Não deve ser possível criar um link com URL encurtada **mal formatada**
  - Não deve ser possível criar um link com URL encurtada **já existente**
- Deve ser possível **deletar** um link
- Deve ser possível **obter a URL original** por meio de uma URL encurtada
- Deve ser possível **listar todas as URLs** cadastradas
- Deve ser possível **incrementar a quantidade de acessos** de um link
- Deve ser possível **exportar os links criados em um CSV**
  - Deve ser possível acessar o CSV por meio de uma **CDN** (Amazon S3, Cloudflare R2, etc)
  - Deve ser gerado um **nome aleatório e único** para o arquivo
  - Deve ser possível realizar a listagem de forma **performática**
  - O CSV deve conter os campos:
    - URL original
    - URL encurtada
    - Contagem de acessos
    - Data de criação

---

## 🔁 Identificadores nas rotas

As funcionalidades de deletar ou incrementar acessos podem utilizar `id` ou a `URL encurtada` como identificador.
Escolha um padrão e mantenha a consistência na API e no front-end.

---

## 🐳 Docker

Este projeto deve conter um `Dockerfile`, seguindo boas práticas, responsável por gerar a imagem da aplicação.

---

## 🧠 Dicas

- Habilite o **CORS** na aplicação.
- Em caso de dúvidas, utilize a comunidade e o fórum da pós para trocar ideias com outros alunos e instrutores.
