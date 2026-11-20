import { Button } from '@/components/ui/Button'

interface Props {
  class?: string
}

export function SearchButton ({ class: className = '' }: Props) {
  return (
    <Button color='primary' class={className}>
      Buscar
    </Button>
  )
}
