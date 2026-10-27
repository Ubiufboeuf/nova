import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { IconSearch } from '@/components/ui/Icons'

interface Props {
  class?: string
}

export function SearchButton ({ class: className = '' }: Props) {
  return (
    <Button color='primary' class={className}>
      <Icon class='size-4'>
        <IconSearch />
      </Icon>
    </Button>
  )
}
