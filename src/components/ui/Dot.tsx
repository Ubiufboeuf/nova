export function Dot ({ class: className = '' }: { class?: string }) {
  return (
    <div class={`${className} rounded-full aspect-square bg-current`} />
  )
}
