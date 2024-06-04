
import Buttom from '../components/Buttom'
import Profile from '../components/Profile'
import SearchEngine from '../components/SearchEngine'
import './styles/HomePage.css'

const HomePage = () => {

  const labelsButtoms = ['Advertencia', 'Imprimir', 'VIN']

  return (
    <>
      <div className='container'>
        <div className='container_lateral_menu'></div>
        <div className='container_header'>
          <div className='searchBox'>
            <SearchEngine/>
          </div>
          <div className='contentOptions'>
            <Buttom label = {labelsButtoms[0]}/>
            <Buttom label = {labelsButtoms[1]}/>
            <Buttom label = {labelsButtoms[2]}/>
            <Profile/>
          </div>
        </div>
        <div className='container_body'></div>
        <div className='container_footer'>
          <p className='label_footer'>Workshop Manual</p>
          <p className='label_footer'>2003 - 2008</p>
        </div>
      </div>
    </>
  )
}

export default HomePage