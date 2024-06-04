import './styles/SearchEngine.css'
import { BsSearch } from "react-icons/bs";

const SearchEngine = () => {
  return (
    <div className="searchBoxEngine">
      <div className="imgSearch"><BsSearch /></div>
      <form action="">
        <input type="text" />
      </form>
    </div>
  )
}

export default SearchEngine