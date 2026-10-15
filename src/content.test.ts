import { describe, expect, it } from 'vitest'
import { education, experience, profile, projects } from './content'
import { resolveInitialTheme } from './lib/theme'

describe('conteúdo do portfólio', () => {
  it('usa os links oficiais informados', () => {
    expect(profile.links.github).toBe('https://github.com/Theusiiin')
    expect(profile.links.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\/matheus-bonfatti-lara-73a78a235\/?$/)
  })

  it('lista os quatro projetos, cada um com repositório e aplicação em HTTPS', () => {
    expect(projects.map((p) => p.id).sort()).toEqual(['calculadora', 'cinescope', 'clima', 'portfolio'])
    for (const p of projects) {
      expect(p.repoUrl).toMatch(/^https:\/\/github\.com\/Theusiiin\/[\w-]+$/)
      expect(p.demoUrl).toMatch(/^https:\/\/theusiiin\.github\.io\/[\w-]+\/$/)
    }
  })

  it('marca como provisório todo item ainda não preenchido', () => {
    for (const item of [...experience, ...education]) {
      const hasMarker = Object.values(item).some((v) => typeof v === 'string' && v.includes('[PREENCHER]'))
      expect(item.placeholder).toBe(hasMarker)
    }
  })
})

describe('tema', () => {
  it('respeita a escolha salva e, sem ela, a preferência do sistema', () => {
    expect(resolveInitialTheme('light', false)).toBe('light')
    expect(resolveInitialTheme('dark', true)).toBe('dark')
    expect(resolveInitialTheme(null, true)).toBe('light')
    expect(resolveInitialTheme('qualquer', false)).toBe('dark')
  })
})
