# Portfólio — React + TypeScript + Tailwind

Site de portfólio com grade em mosaico, filtro por categoria, tema claro/escuro e página individual para cada projeto. Pronto para publicar no Netlify de graça.

---

## 1. Rodar na sua máquina

Você precisa do **Node.js 20 ou superior** ([baixar aqui](https://nodejs.org)).

Abra a pasta no VS Code e, no terminal integrado (`Ctrl + '`):

```bash
npm install     # só na primeira vez
npm run dev     # inicia o site em http://localhost:5173
```

Deixe esse comando rodando. Toda vez que você salvar um arquivo, o navegador atualiza sozinho.

| Comando          | O que faz                                              |
| ---------------- | ------------------------------------------------------ |
| `npm run dev`    | Site local com atualização automática                   |
| `npm run build`  | Gera a versão de produção na pasta `dist/`             |
| `npm run preview`| Abre a versão de produção para conferir antes de subir |
| `npm test`       | Verifica os dados e se todas as imagens existem         |
| `npm run typecheck` | Confere os tipos sem gerar arquivos                 |

---

## 2. Colocar suas fotos e informações

Só existem **três lugares** para mexer. O resto do código você não precisa tocar.

### `public/images/` — as imagens

Arraste seus arquivos para essa pasta. Um arquivo chamado `abertura.jpg` vira o caminho `/images/abertura.jpg`.

Dicas rápidas:

- Use `.jpg` para fotos e `.webp` se quiser peso menor. `.png` só quando precisar de fundo transparente.
- Redimensione a maior dimensão para no máximo **1600px** e mire em **até 400 KB por arquivo**. Foto de 8 MB deixa o site lento.
- Nomes sem acento, sem espaço e em minúsculas: `retrato-estudio.jpg` ✅ / `Foto Final (2).JPG` ❌
- Pode apagar os arquivos `exemplo-01.svg` até `exemplo-07.svg` quando não precisar mais deles.

### `src/content/site.ts` — seus dados

Nome, função, cidade, frase de abertura, texto do "sobre", e-mail e redes sociais. Cada campo tem um comentário explicando para que serve.

### `src/content/projects.ts` — seus trabalhos

Cada projeto é um bloco entre `{` e `}`. Para adicionar um novo, copie um bloco inteiro, cole no topo da lista e troque os valores:

```ts
{
  slug: 'nome-na-url',            // minúsculo, sem acento, sem espaço
  title: 'Nome do Projeto',
  category: 'ilustração',         // vira um botão de filtro automaticamente
  year: 2026,
  tags: ['editorial', 'capa'],    // aparecem como #editorial #capa
  cover: {
    src: '/images/minha-foto.jpg',
    alt: 'Descreva a imagem em uma frase',
  },
  excerpt: 'Uma linha resumindo o trabalho.',
  description: [
    'Primeiro parágrafo do texto.',
    'Segundo parágrafo.',
  ],
  client: 'Nome do cliente',      // opcional: pode apagar a linha
  role: 'Sua função',             // opcional
  gallery: [                      // opcional: imagens extras na página do projeto
    { src: '/images/detalhe.jpg', alt: 'Detalhe do trabalho' },
  ],
},
```

**O primeiro projeto da lista aparece primeiro no site.** Para reordenar, mova os blocos.

> **Sobre o `alt`:** é a descrição lida por leitores de tela e pelo Google. Escreva o que a imagem mostra, não o nome do arquivo.

Depois de adicionar imagens, rode `npm test`. Se você digitou um caminho errado, o teste aponta exatamente qual.

### Trocar as cores e as fontes

- **Cores:** `src/index.css`, no topo. `:root` é o tema claro, `.dark` é o escuro.
- **Fontes:** `index.html` (o link do Google Fonts) e `src/index.css` (`--font-display` e `--font-sans`).

---

## 3. Publicar no Netlify (grátis)

### Opção A — arrastar a pasta (mais rápido, 2 minutos)

1. Rode `npm run build`. Isso cria a pasta `dist/`.
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
3. Arraste a pasta **`dist`** para a área indicada.
4. O site sobe com um endereço tipo `nome-aleatorio.netlify.app`. Em *Site configuration → Change site name* você troca por algo seu.

Toda vez que mudar algo, repita: `npm run build` e arraste a `dist` de novo.

### Opção B — conectar ao GitHub (recomendado a médio prazo)

Assim cada `git push` publica sozinho.

```bash
git init
git add .
git commit -m "feat: portfólio inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

No Netlify: **Add new site → Import an existing project → GitHub** e escolha o repositório. As configurações já vêm prontas no `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

Clique em **Deploy**. A partir daí, todo push na `main` gera um deploy novo automaticamente.

### Domínio próprio

Em *Domain management → Add a domain*, o Netlify mostra os registros DNS para apontar no seu registrador (Registro.br, GoDaddy etc.). O certificado HTTPS é emitido de graça.

---

## 4. Estrutura de pastas

```
public/
  images/              ← SUAS IMAGENS AQUI
  favicon.svg
src/
  content/
    site.ts            ← SEUS DADOS
    projects.ts        ← SEUS PROJETOS
  components/
    layout/            Header, Footer, botão de tema
    portfolio/         Hero, filtros, card, grade, sobre
    ui/                Reveal, ErrorBoundary, ScrollToTop
  hooks/               Estado isolado da interface
  lib/                 Regras puras (filtro, busca, formatação)
  pages/               Início, projeto, 404
  types/               Contratos de tipo do conteúdo
  test/                Testes automatizados
netlify.toml           Configuração de deploy
```

Separação: `lib/` não conhece React, `hooks/` guardam o estado, `components/` só desenham. Facilita mudar o visual sem quebrar a lógica.

---

## 5. Problemas comuns

| Sintoma                                    | Causa provável e solução                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Card mostra "Imagem não encontrada"        | O caminho em `cover.src` não bate com o arquivo. Deve começar com `/images/` e incluir a extensão correta (`.jpg` ≠ `.JPG`). |
| Site abre em branco                        | Veja o erro no terminal do `npm run dev`. Quase sempre é uma vírgula faltando em `projects.ts`. |
| `npm install` falha                        | Confirme a versão com `node -v`. Precisa ser 20 ou superior.                                 |
| Deu 404 ao atualizar a página de um projeto | Só acontece se o `netlify.toml` não subiu junto. Ele precisa estar na raiz do repositório.   |
| A categoria nova não apareceu no filtro    | O texto em `category` precisa ser idêntico entre os projetos, inclusive acento e maiúscula.   |
