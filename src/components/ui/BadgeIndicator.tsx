import type { StatusBadgeProps } from '@/types/ui/badgeTypes'
import type { UIStatus } from '@/types/ui/uiTypes'
import { Dot } from './Dot'

const BADGE_STATUS: Record<UIStatus, string> = {
  success: 'text-ok',
  error: 'text-error',
  info: 'text-navy',
  warning: 'text-warning'
}

export function StatusBadge ({ status, class: className = '', children }: StatusBadgeProps) {
  const badgeStatus = BADGE_STATUS[status]

  return (
    <div class={`${className} ${badgeStatus} flex items-center text-sm gap-2`}>
      <Dot class='size-2' />
      {children}
    </div>
  )
}
