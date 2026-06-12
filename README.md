# Ronaldo Despachante — Landing Page

Landing page premium para conversão via WhatsApp, desenvolvida com React, Vite, Tailwind CSS e Framer Motion.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (inclui npm)

## Instalação e execução

```bash
cd C:\Users\italo\Projects\ronaldo-despachante
npm install
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Build para produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam em `dist/` — prontos para deploy em Netlify, Vercel, hospedagem compartilhada, etc.

## Personalização

Edite `src/lib/constants.ts`:

| Campo | Descrição |
|-------|-----------|
| `WHATSAPP_NUMBER` | Número com DDI (ex: `5511999887766`) |
| `WHATSAPP_MESSAGE` | Mensagem padrão ao abrir o WhatsApp |
| `COMPANY` | Nome, telefone, Instagram e horário |

### Imagem de fundo do Hero

Coloque sua imagem em `public/hero-bg.jpg`. A imagem enviada no briefing foi pensada para essa posição — o layout usa fallback do Unsplash se o arquivo não existir.

## Seções

- Hero com animações (fade, texto letra a letra, botão pulse)
- Barra de confiança
- Grid de serviços com hover 3D
- Timeline "Como funciona"
- Benefícios
- Depoimentos (slider automático)
- FAQ (accordion)
- CTA final com glow
- Rodapé completo
- Botão flutuante de WhatsApp

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (ícones)
