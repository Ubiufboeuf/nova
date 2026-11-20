import { SearchBar } from '../layout/search/SearchBar'
import { SearchButton } from '../layout/search/SearchButton'

export function GlobalSearchBar () {
  return (
    <div class='h-full flex flex-1'>
      <SearchBar
        placeholder='Busca productos, marcas, categorías...'
        button={() => <SearchButton class='h-full flex items-center justify-center px-3 text-sm rounded text-slate-50' />}
      />
    </div>
  )
}
