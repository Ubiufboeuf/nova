interface Props {
  active?: boolean
  name?: string
  class?: string
  onChange?: () => void
}

export function SlideIndicator ({ active, name, class: className = '', onChange }: Props) {
  return (
    <label
      class={`${className} h-1.5 w-4 has-checked:w-8 rounded-full transition-all bg-slate-400 has-checked:bg-brand cursor-pointer`}
    >
      <input name={name} type='radio' checked={active} onChange={onChange} hidden />
    </label>
  )
}
