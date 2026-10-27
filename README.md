# Tarea: Componentes con daisyUI

Proyecto Next.js (App Router) + Tailwind CSS 4 + daisyUI 5 con el tema institucional `icesi`
definido en `app/globals.css`.

## Página de demostración

`/components` → `app/(page)/components/page.tsx`

## Componentes implementados

| # | Componente | Ruta | Tipo |
|---|---|---|---|
| 01 | Botón de acción | `src/shared/components/ui/action-button.tsx` | Server |
| 02 | Insignia de estado | `src/shared/components/ui/status-badge.tsx` | Server |
| 03 | Banner de alerta | `src/shared/components/ui/alert-banner.tsx` | Cliente |
| 06 | Calificación por estrellas | `src/shared/components/ui/rating-display.tsx` | Server |
| 07 | Métrica bento | `src/shared/components/ui/metric-bento-stat.tsx` | Server |
| 08 | Tarjeta de asignatura | `src/features/courses/components/course-card.tsx` | Server |
| 10 | Notificación toast | `src/shared/components/ui/toast-notification.tsx` | Cliente |
| 13 | Rastreador de pasos | `src/shared/components/ui/step-progress-tracker.tsx` | Server |
| 14 | Selector de etiquetas | `src/shared/components/ui/tag-filter-group.tsx` | Cliente |
| 16 | Barra de navegación | `src/shared/components/ui/academic-app-navbar.tsx` | Server |
| 18 | Modal de confirmación | `src/shared/components/ui/submission-confirm-modal.tsx` | Cliente |
| 20 | Acordeón de sprints | `src/shared/components/ui/sprint-accordion-panel.tsx` | Server |

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000/components`.
