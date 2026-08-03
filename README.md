<div align="center">

# ⛪ Paróquia Imaculada Conceição

**Site institucional para uma paróquia com três comunidades — horários, sacramentos, intenções, dízimo e o santo do dia.**

Design editorial com tipografia serifada, paleta âmbar sobre zinco e o cuidado visual que um site de igreja raramente recebe.

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion_12-0055FF?style=for-the-badge&logo=framer&logoColor=white)

[**🔗 Ver o site**](https://gods-work-pi.vercel.app)

</div>

---

## 📖 Sobre o projeto

Sites de paróquia geralmente resolvem a informação e param aí: um WordPress com a tabela de horários e pouco mais. A intenção aqui foi tratar o site com o mesmo cuidado estético que o espaço físico recebe — hero em tela cheia com pintura clássica, tipografia serifada nos títulos, itálico nos nomes, paleta âmbar sobre zinco escuro.

O resultado é um site institucional completo para uma paróquia de **três comunidades**, com tudo que um fiel procura online: onde e quando, como participar, como contribuir.

## 🗂️ Páginas

| Rota | Conteúdo |
| ---- | -------- |
| `/` | Hero, santo do dia, próximo evento, cards das comunidades |
| `/horarios` | Grade completa de missas e atividades |
| `/sacramentos` | Informações sobre batismo, casamento, catequese e demais sacramentos |
| `/intencoes` | Pedidos de oração e intenções de missa |
| `/dizimo` | Como contribuir |
| `/padroeira` | História e devoção à Imaculada Conceição |
| `/contato` | Contatos da paróquia |
| `/comunidades/matriz` | Matriz Imaculada — Rua Albano Schmidt, 1885 |
| `/comunidades/santa-luzia` | Santa Luzia — Rua Alcântara, 830 |
| `/comunidades/jesus-misericordioso` | Jesus Misericordioso — Rua das Violetas, 330 |

## ✨ Componentes de destaque

### 🗓️ `NextEvent`

Componente client-side que cruza a agenda semanal com o dia e a hora atuais para mostrar **qual é o próximo evento** — missa, Terço dos Homens, Grupo de Oração, Novena Perpétua. Quem abre o site vê o que vem a seguir, não uma tabela para interpretar.

A agenda é um array de objetos `{ day, time, name, local }` dentro do componente.

### 🕯️ `SantoDoDia`

Server Component assíncrono que apresenta o santo do dia com imagem, data formatada em português (`Intl.DateTimeFormat`) e um texto sobre a devoção.

> ⚠️ Hoje a função `fetchSantoDoDia()` retorna dados fixos. A estrutura já é assíncrona justamente para trocar isso por uma chamada real (API de calendário litúrgico ou CMS) sem mudar o componente.

## 🛠️ Stack

| Tecnologia | Versão | Uso |
| ---------- | ------ | --- |
| [Next.js](https://nextjs.org/) | 16 | Framework React (App Router, Server Components) |
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utilitária |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animações |
| [Lucide React](https://lucide.dev/) | 1.11 | Ícones |
| [Geist](https://vercel.com/font) | — | Tipografia (sans + mono) |

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm, yarn, pnpm ou bun

### Instalação e execução

```bash
git clone https://github.com/Jlvieira0909/gods-work.git
cd gods-work
npm install

npm run dev      # desenvolvimento
npm run build    # build de produção
npm run start    # servir o build
npm run lint     # ESLint
```

Abra [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura

```
gods-work/
├── app/
│   ├── page.tsx                  # home
│   ├── layout.tsx                # metadata + fontes Geist
│   ├── globals.css
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── NextEvent/            # próximo evento da agenda
│   │   └── SantoDoDia/           # santo do dia
│   ├── horarios/
│   ├── sacramentos/
│   ├── intencoes/
│   ├── dizimo/
│   ├── padroeira/
│   ├── contato/
│   └── comunidades/
│       ├── matriz/
│       ├── santa-luzia/
│       └── jesus-misericordioso/
└── next.config.ts
```

## 🎨 Direção visual

| Elemento | Escolha |
| -------- | ------- |
| Paleta | Zinco (`zinc-50` a `zinc-950`) com âmbar (`amber-200`, `amber-500`) como acento |
| Títulos | Serifada, tamanhos grandes, `leading-[0.9]`, itálico nos nomes próprios |
| Imagens | `mix-blend-luminosity`, opacidade reduzida e gradientes por cima — integram no fundo escuro em vez de disputar atenção |
| Seleção de texto | Âmbar escuro sobre âmbar claro (`selection:bg-amber-900`) |
| Molduras | Cantos com bordas finas em âmbar translúcido, sugerindo enquadramento de retábulo |

## 📋 Pontos de melhoria

- **`lang="en"` no `<html>`** — o site é todo em português; trocar para `lang="pt-BR"` corrige acessibilidade e SEO
- **Metadata genérica** — `description: "Amen"` merece uma descrição real para busca e compartilhamento
- **Imagens externas** — todas vêm de `paroquiaboavista.com.br`; hospedar localmente evita quebra e permite usar `next/image` com otimização
- **`SantoDoDia` com dados fixos** — trocar por fonte real de calendário litúrgico
- **`<img>` em vez de `next/image`** — perde otimização automática e lazy loading

## 🌐 Deploy

Hospedado na [Vercel](https://vercel.com/): **[gods-work-pi.vercel.app](https://gods-work-pi.vercel.app)**

---

<div align="center">

Feito com ❤️ por [João Luiz Vieira](https://github.com/Jlvieira0909)

</div>
