import type { ReactNode } from 'preact/compat'
import type { UIStatus } from './uiTypes'

export interface StatusBadgeProps {
  status: UIStatus
  class?: string
  children?: ReactNode
}
