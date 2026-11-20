import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { IconShoppingCart } from '../ui/Icons'

export function CartButton () {
  return (
    <Button class='flex items-center gap-2 h-full w-fit text-sm px-3 rounded-md text-slate-800 hover:bg-slate-200 active:bg-slate-300'>
      <Icon class='size-5'>
        <IconShoppingCart />
      </Icon>
      Carrito
    </Button>
  )
}
