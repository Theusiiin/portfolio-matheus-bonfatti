export type Theme = 'light' | 'dark'

export const THEME_KEY = 'portfolio:theme'

/** Tema salvo pelo visitante, ou o do sistema operacional, ou escuro por padrão. */
export function resolveInitialTheme(stored: string | null, prefersLight: boolean): Theme {
  if (stored === 'light' || stored === 'dark') return stored
  return prefersLight ? 'light' : 'dark'
}

export function readStoredTheme(): string | null {
  try {
    return localStorage.getItem(THEME_KEY)
  } catch {
    return null
  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* armazenamento indisponível: o tema vale só para esta visita */
  }
}
