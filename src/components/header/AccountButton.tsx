import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { IconUser } from '../ui/Icons'

export function AccountButton () {
  return (
    <Button class='flex items-center gap-2 h-full w-fit text-sm px-3 rounded-md text-slate-800 hover:bg-slate-200 active:bg-slate-300'>
      <Icon class='size-5'>
        <IconUser />
      </Icon>
      Mi cuenta
    </Button>
  )
}
