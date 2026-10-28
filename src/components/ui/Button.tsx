import { BUTTON_COLORS } from '@/constants/ui/buttonConstants'
import type { UIColors } from '@/types/ui/uiTypes'
import type { ComponentChildren } from 'preact'

interface Props {
  children?: ComponentChildren
  id?: string
  class?: string
  type?: 'link'
  href?: string
  color?: UIColors
  onClick?: () => void
}

export function Button ({ children, id, class: className = '', type, href, color, onClick }: Props) {
  const btnColor = color ? BUTTON_COLORS[color] : ''
  
  if (type === 'link') {
    return (
      <a
        id={id}
        href={href}
        class={`${className} ${btnColor} flex transition-colors cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button
      id={id}
      class={`${className} ${btnColor} flex items-center justify-center transition-colors cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
