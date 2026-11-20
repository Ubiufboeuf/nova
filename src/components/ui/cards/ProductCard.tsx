import type { ProductCardProps } from '@/types/ui/cardTypes'
import { ProductCardBadges } from './ProductCardBadges'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { IconHeart, IconShoppingCart, IconStar } from '../Icons'
import { formatPrice } from '@/utils/currencies'
import { StatusBadge } from '../BadgeIndicator'

const STOCK_STATES: Record<ProductCardProps['stockState'], 'success' | 'error' | 'warning'> = {
  enough: 'success',
  few: 'warning',
  none: 'error'
}

const STOCK_LABELS: Record<ProductCardProps['stockState'], string> = {
  enough: 'En stock',
  few: 'Pocas unidades',
  none: 'Sin stock'
}

export function ProductCard ({ id, badges, image, link, brand, product, rating, price, cuotes, stockState, class: className = '' }: ProductCardProps) {
  return (
    <article id={id} class={`${className} w-52 rounded-md flex flex-col bg-page`}>
      <div class='w-full h-auto aspect-square relative p-3 border-b border-line'>
        <a href={link} class='h-full w-full'>
          <img src={image} class='h-full w-full object-contain' loading='lazy' />
        </a>
        <ProductCardBadges badges={badges} />
        <Button class='group absolute right-2 top-2 rounded-full size-10 border-2 bg-page border-line hover:bg-slate-200 transition-colors'>
          <Icon class='size-5 text-slate-500 group-hover:text-accent transition-colors'>
            <IconHeart />
          </Icon>
        </Button>
      </div>
      <div class='h-fit w-full flex flex-col p-3 px-4 gap-1 flex-1'>
        <span class='text-xs text-slate-500 uppercase tracking-wider'>{brand}</span>
        <a href={link} title={product} class='text-sm line-clamp-2 hover:text-navy transition-colors'>{product}</a>
        <div class='flex items-center h-fit gap-1 mt-auto'>
          <Icon class='text-warning size-4'>
            <IconStar fill />
          </Icon>
          <span class='text-xs text-slate-700'>{rating.value} <span class='text-slate-500'>({rating.votes})</span></span>
        </div>
        <div class='flex flex-col'>
          <span class='text-xs text-slate-500 line-through font-semibold'>{formatPrice(price.base.value, price.base.currency)}</span>
          <span class='text-lg font-bold text-accent'>{formatPrice(price.offer.value, price.offer.currency)}</span>
          <span class='text-xs text-ok'>{cuotes?.quantity} cuotas de {formatPrice(cuotes?.amount.value ?? 0, cuotes?.amount.currency)}</span>
        </div>
        <StatusBadge status={STOCK_STATES[stockState]} class='text-xs'>{STOCK_LABELS[stockState]}</StatusBadge>
      </div>
      <div class='w-full h-fit pb-4 px-4'>
        <Button color='primary' class='w-full h-fit p-3 gap-2 font-semibold text-sm rounded-lg'>
          <Icon class='size-5'>
            <IconShoppingCart />
          </Icon>
          Agregar
        </Button>
      </div>
    </article>
  )
}
