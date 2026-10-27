import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { IconUser } from '../ui/Icons'

export function AccountButton () {
  return (
    <Button class='h-full aspect-square rounded-md text-slate-800 hover:bg-slate-200 active:bg-slate-300'>
      <Icon class='size-6'>
        <IconUser />
      </Icon>
    </Button>
  )
}
