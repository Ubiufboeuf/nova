import { SearchBar } from './search/SearchBar'
import { SearchButton } from './search/SearchButton'

export function GlobalSearchBar () {
  return (
    <div class='h-full w-full flex'>
      <SearchBar
        placeholder='Busca productos, marcas, categorías...'
        button={() => <SearchButton class='h-full aspect-square flex items-center justify-center rounded text-slate-50' />}
      />
    </div>
  )
}
