import type { ComponentChildren } from 'preact'

interface Props {
  placeholder?: string
  button?: ({}: { class?: string }) => ComponentChildren
}

export function SearchBar ({ placeholder, button: SearchButton }: Props) {
  return (
    <label class='relative h-full w-full flex items-center gap-4 pl-4 p-0.5 rounded-md border border-slate-300 has-[input:focus]:outline-2 has-[input:focus]:outline-slate-800'>
      <input
        placeholder={placeholder}
        class='w-full h-full text-sm outline-0'
      />
      { SearchButton && <SearchButton /> }
    </label>
  )
}
