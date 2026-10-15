# Portfólio — Matheus Bonfatti

Portfólio pessoal moderno e responsivo, com tema escuro (padrão) e claro, apresentando os projetos publicados no GitHub.

- **Site publicado:** https://theusiiin.github.io/portfolio-matheus-bonfatti/
- **Repositório:** https://github.com/Theusiiin/portfolio-matheus-bonfatti

![Captura de tela do portfólio](docs/screenshot.jpg)

## Seções

1. **Início** — nome, apresentação curta, botões para projetos e contato, links do LinkedIn e GitHub.
2. **Sobre mim** — formação em ADS, experiência em suporte e interesse em desenvolvimento.
3. **Competências técnicas** — Front-end e Back-end; Dados e integrações.
4. **Projetos em destaque** — CineTheusin, Calculadora Financeira, Consulta Clima e este site, com links para a aplicação e o código.
5. **Experiência e formação** — trajetória profissional e acadêmica (baseada no currículo).
6. **Contato** — LinkedIn e GitHub.
7. **Rodapé**.

## Como personalizar

Todo o conteúdo fica em **[`src/content.ts`](src/content.ts)**: apresentação, “Sobre mim”, competências, projetos, experiência e formação. Itens com `placeholder: true` (ou com o texto `[PREENCHER]`) aparecem no site com o selo **“Conteúdo provisório”** — um teste automatizado garante essa marcação. Hoje nenhum item está provisório.

## Recursos

- Tema escuro/claro com alternância, preferência do sistema e escolha salva (sem “piscar” ao carregar).
- Menu fixo com destaque da seção visível e menu móvel.
- Animações sutis de entrada que respeitam “reduzir movimento”.
- Acessibilidade: HTML semântico, link “pular para o conteúdo”, rótulos e foco visível.
- SEO: título, descrição, Open Graph, URL canônica, dados estruturados (`schema.org/Person`), `robots.txt` e `sitemap.xml`.

## Tecnologias

React 19 · TypeScript · Vite · Vitest · oxlint · GitHub Actions/Pages. Sem bibliotecas de UI.

## Estrutura

```
src/
├── content.ts          # TODO o conteúdo editável
├── App.tsx             # seções da página
├── components/         # ícones, ilustrações dos projetos, animação de entrada
├── lib/theme.ts        # tema claro/escuro
└── index.css
public/                 # favicon, robots.txt, sitemap.xml
```

## Pré-requisitos

Node.js 20+ (testado com Node 24 LTS) e npm.

## Execução local e testes

```bash
npm install
npm run dev       # http://localhost:5173
npm test
npm run lint
npm run build
npm run preview
```

## Variáveis de ambiente

Nenhuma.

## Deploy

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) testa, gera o build e publica no **GitHub Pages** a cada push na `main` (Settings → Pages → Source: GitHub Actions).

## Limitações conhecidas

- Não há formulário de contato (o contato é feito pelo LinkedIn); não foi publicado nenhum e-mail.
- Os cartões dos projetos usam ilustrações vetoriais, não capturas de tela.

## Autor

Matheus Bonfatti — [LinkedIn](https://www.linkedin.com/in/matheus-bonfatti-lara-73a78a235/) · [GitHub](https://github.com/Theusiiin)
