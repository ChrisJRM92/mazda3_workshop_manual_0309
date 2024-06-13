// import './styles/SearchEngine.css'
// import { BsSearch } from "react-icons/bs";
import { BiSolidError } from "react-icons/bi";
import './styles/Buttom.css'


const SearchEngine = () => {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    // <div className="searchBoxEngine">
    //   <div className="imgSearch"><BsSearch /></div>
    //   <form action="">
    //     <input className='inputSearch' type="text" placeholder='Buscar...' />
    //   </form>
    // </div>
    <div className="componentButtoms">
      <a href='/public/content/dtc.html' target='contentIframe'><button className="buttomClass"><BiSolidError/> DTCs</button></a>
    </div>
  )
}

export default SearchEngine