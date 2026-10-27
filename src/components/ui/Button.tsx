import { BUTTON_COLORS } from '@/constants/ui/buttonConstants'
import type { UIColors } from '@/types/ui/uiTypes'
import type { ComponentChildren } from 'preact'

interface Props {
  children?: ComponentChildren
  class?: string
  color?: UIColors
}

export function Button ({ children, class: className = '', color }: Props) {
  const btnColor = color ? BUTTON_COLORS[color] : ''
  
  return (
    <button
      class={`${className} ${btnColor} flex items-center justify-center transition-colors cursor-pointer`}
    >
      {children}
    </button>
  )
}
