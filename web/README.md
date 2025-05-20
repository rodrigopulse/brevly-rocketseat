# 📦 Brevly - Front-end (SPA com Vite)

Este documento lista os requisitos e regras para o desenvolvimento da aplicação front-end do projeto **Brevly**, uma plataforma de encurtamento de URLs.

👉 [Acesse o layout no Figma](https://www.figma.com/community/file/1477335071553579816)

---

## ✅ Funcionalidades

- [ ] Deve ser possível **criar um link**
  - [ ] Não deve ser possível criar um link com encurtamento **mal formatado**
  - [ ] Não deve ser possível criar um link com encurtamento **já existente**
- [ ] Deve ser possível **deletar um link**
- [ ] Deve ser possível **obter a URL original** por meio do encurtamento
- [ ] Deve ser possível **listar todas as URL’s cadastradas**
- [ ] Deve ser possível **incrementar a quantidade de acessos** de um link
- [ ] Deve ser possível **baixar um CSV** com o relatório dos links criados

---

## 🎯 Regras para o Front-end

- A aplicação deve ser construída com **React** no formato **SPA**
- O **Vite** deve ser utilizado como `bundler`
- O layout do **Figma** deve ser seguido o mais fielmente possível
- Deve haver atenção à **experiência do usuário**
  - Estados vazios (`empty state`)
  - Ícones ou animações de **carregamento**
  - **Bloqueio de ações** enquanto a aplicação estiver em determinados estados
- A aplicação deve ser **responsiva**, funcionando bem tanto em **desktops quanto em dispositivos móveis**

---

## 🛠️ Tecnologias sugeridas

- React
- Vite
- TypeScript
- TailwindCSS ou outro framework de estilização
- React Router
- Bibliotecas para ícones e loaders (ex: Phosphor Icons, React Spinners)

---

## 📁 Estrutura inicial sugerida

```bash
src/
├── assets/
├── components/
├── pages/
├── routes/
├── services/
├── utils/
└── App.tsx
```
