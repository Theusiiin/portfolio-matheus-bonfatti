/**
 * CONTEÚDO DO PORTFÓLIO — edite este arquivo para personalizar o site.
 *
 * Tudo marcado com `placeholder: true` (ou com o texto "[PREENCHER]") é PROVISÓRIO:
 * o site mostra um selo "Conteúdo provisório" nesses itens até que você os substitua.
 * Nenhuma experiência, formação ou certificação foi inventada.
 */

export const profile = {
  name: 'Matheus Bonfatti',
  displayName: 'MATHEUS BONFATTI',
  /** frase curta do topo — baseada apenas nos projetos publicados neste portfólio */
  headline: 'Projetos web com React, TypeScript e APIs públicas.',
  intro:
    'Bem-vindo ao meu portfólio. Aqui estão aplicações que desenvolvi do zero — da interface aos testes automatizados — publicadas e com código aberto no GitHub.',
  links: {
    linkedin: 'https://www.linkedin.com/in/matheus-bonfatti-lara-73a78a235/',
    github: 'https://github.com/Theusiiin',
  },
}

export interface AboutContent {
  paragraphs: string[]
  placeholder: boolean
}

export const about: AboutContent = {
  placeholder: true,
  paragraphs: [
    '[PREENCHER] Escreva aqui um resumo sobre você: sua trajetória, o que você gosta de construir e o tipo de oportunidade que procura.',
    '[PREENCHER] Um segundo parágrafo opcional com interesses, áreas de foco ou objetivos profissionais.',
  ],
}

export interface SkillGroup {
  title: string
  items: string[]
}

/**
 * Tecnologias efetivamente usadas nos quatro projetos deste portfólio.
 * Acrescente outras competências suas se desejar.
 */
export const skills: SkillGroup[] = [
  { title: 'Front-end', items: ['React', 'TypeScript', 'JavaScript', 'HTML semântico', 'CSS responsivo', 'Acessibilidade (ARIA)'] },
  { title: 'Dados e integrações', items: ['APIs REST', 'Open-Meteo', 'TMDB', 'Cache e tratamento de erros', 'localStorage'] },
  { title: 'Qualidade e ferramentas', items: ['Vite', 'Vitest', 'Testes unitários', 'Git e GitHub', 'GitHub Actions', 'GitHub Pages'] },
  { title: 'Back-end e infraestrutura', items: ['Cloudflare Workers', 'Proxy de API', 'Variáveis de ambiente e secrets'] },
]

export interface Project {
  id: string
  name: string
  summary: string
  highlights: string[]
  tech: string[]
  repoUrl: string
  demoUrl: string
  extraLink?: { label: string; url: string }
  accent: string
  icon: 'portfolio' | 'finance' | 'weather' | 'cinema'
}

const GH = 'https://github.com/Theusiiin'
const PAGES = 'https://theusiiin.github.io'

export const projects: Project[] = [
  {
    id: 'cinescope',
    name: 'CineScope — catálogo de filmes e séries',
    summary:
      'Plataforma de descoberta de filmes e séries com dados do TMDB, filtros, páginas de detalhes e biblioteca pessoal (favoritos, assistir depois, notas e listas).',
    highlights: ['Integração com a API do TMDB via proxy seguro', 'Notas sempre identificadas pela fonte', 'Biblioteca local com backup em JSON'],
    tech: ['React', 'TypeScript', 'React Router', 'Cloudflare Workers', 'Vitest'],
    repoUrl: `${GH}/catalogo-filmes-series`,
    demoUrl: `${PAGES}/catalogo-filmes-series/`,
    extraLink: { label: 'Página do projeto', url: `${PAGES}/catalogo-filmes-series/sobre/` },
    accent: '#ff7a59',
    icon: 'cinema',
  },
  {
    id: 'calculadora',
    name: 'Calculadora Financeira',
    summary:
      'Juros simples e compostos, investimentos com aportes, financiamentos Price e SAC, comparação de cenários e conversão de taxas, com tabelas e gráficos.',
    highlights: ['Fórmulas documentadas e testadas', 'Taxas nominais, efetivas e equivalentes', 'Tabelas mensais e anuais'],
    tech: ['React', 'TypeScript', 'Recharts', 'Vitest'],
    repoUrl: `${GH}/calculadora-financeira`,
    demoUrl: `${PAGES}/calculadora-financeira/`,
    accent: '#14b8a6',
    icon: 'finance',
  },
  {
    id: 'clima',
    name: 'Consulta Clima',
    summary: 'Previsão do tempo para qualquer cidade: condições atuais, próximas 24 horas e 7 dias, com busca por nome e geolocalização opcional.',
    highlights: ['Dados reais da Open-Meteo', 'Tratamento de erros de rede e de API', 'Interface adaptada ao celular'],
    tech: ['React', 'TypeScript', 'Open-Meteo API', 'Vitest'],
    repoUrl: `${GH}/consulta-clima`,
    demoUrl: `${PAGES}/consulta-clima/`,
    accent: '#3b82f6',
    icon: 'weather',
  },
  {
    id: 'portfolio',
    name: 'Este portfólio',
    summary: 'Site pessoal responsivo, com tema claro e escuro, acessibilidade, SEO e conteúdo centralizado em um único arquivo editável.',
    highlights: ['Tema claro/escuro', 'Animações que respeitam “reduzir movimento”', 'Publicado com GitHub Actions'],
    tech: ['React', 'TypeScript', 'Vite', 'GitHub Pages'],
    repoUrl: `${GH}/portfolio-matheus-bonfatti`,
    demoUrl: `${PAGES}/portfolio-matheus-bonfatti/`,
    accent: '#a78bfa',
    icon: 'portfolio',
  },
]

export interface TimelineItem {
  title: string
  organization: string
  period: string
  description: string
  placeholder: boolean
}

/** Substitua pelos seus dados reais e mude `placeholder` para false. */
export const experience: TimelineItem[] = [
  {
    title: '[PREENCHER] Cargo',
    organization: '[PREENCHER] Empresa',
    period: '[PREENCHER] mês/ano – atual',
    description: '[PREENCHER] Principais responsabilidades e resultados.',
    placeholder: true,
  },
]

export const education: TimelineItem[] = [
  {
    title: '[PREENCHER] Curso',
    organization: '[PREENCHER] Instituição',
    period: '[PREENCHER] início – conclusão',
    description: '[PREENCHER] Detalhes opcionais (ênfase, projetos, status).',
    placeholder: true,
  },
]
