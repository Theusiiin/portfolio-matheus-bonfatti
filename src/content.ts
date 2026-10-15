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
  placeholder: false,
  paragraphs: [
    'Sou formado em Análise e Desenvolvimento de Sistemas e trabalho há mais de 5 anos com suporte técnico, Service Desk e sustentação de plataformas SaaS. Hoje não atuo diretamente com desenvolvimento, mas tenho grande interesse em ingressar na área.',
    'Gosto de aprender coisas novas e de entender como os sistemas funcionam por dentro — e a experiência no suporte me ensinou a investigar problemas, conversar com clientes e equipes técnicas e pensar em quem usa o produto. Os projetos deste portfólio são parte dessa transição: aplicações completas, testadas e publicadas, que mostram como gosto de construir.',
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
  { title: 'Front-end e Back-end', items: ['React', 'TypeScript', 'JavaScript', 'HTML semântico', 'CSS responsivo'] },
  { title: 'Dados e integrações', items: ['APIs REST', 'Open-Meteo', 'TMDB', 'Cache e tratamento de erros', 'localStorage'] },
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
    id: 'cinetheusin',
    name: 'CineTheusin — catálogo de filmes e séries',
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

/** Baseado no currículo (sem dados de contato pessoais nem nomes de clientes). */
export const experience: TimelineItem[] = [
  {
    title: 'Analista de Suporte',
    organization: 'NeoAssist',
    period: '03/2026 – atual',
    description:
      'Suporte técnico e funcional a clientes de uma plataforma SaaS Omnichannel: análise e resolução de incidentes, investigação de problemas e acompanhamento de chamados dentro dos SLAs. Interface entre clientes e as equipes de Produto e Desenvolvimento para tratativas de incidentes e melhorias, com suporte aos canais de WhatsApp, chat, e-mail, formulários web e redes sociais.',
    placeholder: false,
  },
  {
    title: 'Analista Pleno de Service Desk',
    organization: 'Allied IT',
    period: '03/2024 – 02/2026',
    description:
      'Suporte remoto N2 a múltiplos clientes de grande porte, via sistema de chamados e telefone: resolução de incidentes e requisições, administração de usuários (Active Directory e SAP), instalação e configuração de softwares, troubleshooting de ambientes corporativos e coordenação de fornecedores.',
    placeholder: false,
  },
]

export const education: TimelineItem[] = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    organization: 'Faculdade Impacta',
    period: 'Conclusão: 2026',
    description: 'Graduação tecnológica.',
    placeholder: false,
  },
  {
    title: 'Cursos complementares',
    organization: 'Formação contínua',
    period: 'Concluídos e em andamento',
    description: 'SQL básico, HTML e CSS e Lógica de Programação. Cursando: Power BI e trilhas do Microsoft Learn.',
    placeholder: false,
  },
  {
    title: 'Ensino Médio',
    organization: 'José Wilson Padinha',
    period: 'Conclusão: 2021',
    description: 'Ensino médio completo.',
    placeholder: false,
  },
]
