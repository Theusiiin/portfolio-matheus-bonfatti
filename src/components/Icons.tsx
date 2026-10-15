import type { Project } from '../content'

type IconProps = { size?: number }

export function GitHubIcon({ size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function ExternalIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

/** Ilustração de capa de cada projeto (sem capturas de tela fictícias). */
export function ProjectArt({ icon, accent }: { icon: Project['icon']; accent: string }) {
  const common = { fill: 'none', stroke: accent, strokeWidth: 3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 120 80" className="project-art" aria-hidden="true">
      <defs>
        <radialGradient id={`glow-${icon}`} cx="0.7" cy="0.2" r="0.9">
          <stop offset="0" stopColor={accent} stopOpacity="0.35" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="120" height="80" fill={`url(#glow-${icon})`} />
      {icon === 'finance' && (
        <>
          <path d="M18 60 L40 44 L56 52 L80 30 L102 22" {...common} />
          <path d="M92 20 L103 21 L101 32" {...common} />
          <path d="M18 66 H102" {...common} strokeOpacity="0.35" />
        </>
      )}
      {icon === 'weather' && (
        <>
          <circle cx="48" cy="34" r="12" {...common} />
          <path d="M40 60 H82 a12 12 0 0 0 0-24 a16 16 0 0 0-30 4 a10 10 0 0 0-12 20z" {...common} />
        </>
      )}
      {icon === 'cinema' && (
        <>
          <rect x="24" y="22" width="72" height="44" rx="6" {...common} />
          <path d="M52 34 L70 44 L52 54 Z" {...common} />
          <path d="M24 30 H96 M24 58 H96" {...common} strokeOpacity="0.35" />
        </>
      )}
      {icon === 'portfolio' && (
        <>
          <rect x="20" y="18" width="80" height="50" rx="6" {...common} />
          <path d="M20 30 H100" {...common} />
          <path d="M32 44 H60 M32 54 H72" {...common} strokeOpacity="0.5" />
          <circle cx="84" cy="50" r="7" {...common} />
        </>
      )}
    </svg>
  )
}
