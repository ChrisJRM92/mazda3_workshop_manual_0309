import './styles/SearchEngine.css'
import { BsSearch } from "react-icons/bs";

const SearchEngine = () => {
  return (
    <div className="searchBoxEngine">
      <div className="imgSearch"><BsSearch /></div>
      <form action="">
        <input className='inputSearch' type="text" placeholder='Buscar...' />
      </form>
    </div>
  )
}

export default SearchEngine