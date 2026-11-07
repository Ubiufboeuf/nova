import type { ProductCardProps } from '@/types/ui/cardTypes'

const BADGE_COLORS = {
  discount: 'bg-accent text-white',
  new: 'bg-ink text-white'
}

export function ProductCardBadges ({ badges }: { badges: ProductCardProps['badges'] }) {
  return (
    <div class='absolute left-2 top-2 flex flex-col gap-1'>
      { badges.map((badge, idx) => {
        const badgeColors = BADGE_COLORS[badge.type] || 'bg-gray-500 text-white'
        return (
          <span key={idx} class={`${badgeColors} text-xs font-semibold px-2 py-0.75 rounded`}>{badge.value}</span>
        )
      }) }
    </div>
  )
}
