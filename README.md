# Gésio de Moura — Dev & Designer 🚀

Bem-vindo ao repositório do projeto **Gésio.dev**. Este é um site de portfólio de alta fidelidade visual, construído com as tecnologias mais modernas do ecossistema web para refletir a intersecção entre o design refinado e o desenvolvimento robusto.

> "Uma mistura inteligente de dev com designer."

---

## ✨ O Projeto

Este projeto é uma landing page performática que utiliza padrões visuais geométricos e uma estética *dark mode* para apresentar as habilidades e experiências de Gésio de Moura. O foco principal é a **experiência do usuário (UX)** e a **fidelidade visual**, garantindo que o design concebido no Figma seja traduzido perfeitamente para o código.

### 🛠️ Tech Stack

O projeto utiliza o que há de mais recente no mercado:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Runtime:** [React 19](https://react.dev/)

---

## 🏗️ Estrutura de Componentes

O projeto é organizado de forma modular para facilitar a manutenção e escalabilidade:

```text
src/components/
├── About.tsx             # Seção institucional e FAQ
├── Accordion.tsx         # Componente de acordeão interativo para o FAQ
├── Button.tsx            # Sistema de botões (Primary/Secondary)
├── DecorativePattern.tsx # O motor visual do site (Padrões geométricos)
├── Footer.tsx            # Rodapé com navegação rápida
├── Header.tsx            # Cabeçalho fixo com branding
└── Hero.tsx              # Seção principal de impacto
```

---

## 📊 Insights de Arquitetura

Após uma análise profunda do código, identificamos os seguintes dados interessantes:

- **Componente Ubíquo:** O `DecorativePattern` é o componente mais instanciado (14x), sendo responsável pela identidade visual única do site.
- **Interatividade:** O elemento de ação predominante é o `<button>`, encapsulado tanto no componente `Button` quanto no `Accordion`, garantindo uma base sólida para acessibilidade e feedback tátil.
- **Foco em Conversão:** Os botões são estrategicamente posicionados no `Header` e `Hero` para guiar o usuário pelas experiências e projetos.

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão recomendada v20 ou superior)
- npm, yarn ou pnpm

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gesio-dev.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento
Inicie o servidor local:
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ☕ e código por [Gésio de Moura](https://github.com/gesiodemoura).
