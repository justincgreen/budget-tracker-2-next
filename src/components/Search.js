import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const Search = () => {
  const {
    search,
    setSearch
  } = useContext(GlobalContext);
  
  // Search expenses functionality
  const captureSearchData = (e) => {
    setSearch(e.target.value.toLowerCase());
  }
  
  return (
    <div className="c-search">
      <input type="text" placeholder="Search Expenses" className="c-search__input-form" onChange={captureSearchData} />
    </div>
  )
}


export default Search