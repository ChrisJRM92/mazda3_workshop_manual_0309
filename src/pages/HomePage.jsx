import { IoInformationCircleSharp } from "react-icons/io5";
import { PiEngineFill } from "react-icons/pi";
import { GiSpring } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { GiGearStickPattern } from "react-icons/gi";
import { GiSteeringWheel } from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdContentPasteSearch } from "react-icons/md";

import Buttom from '../components/Buttom'
import Profile from '../components/Profile'
import SearchEngine from '../components/SearchEngine'
import './styles/HomePage.css'

const HomePage = () => {

  const labelsButtoms = ['Advertencia', 'Imprimir', 'VIN']
  const url = ['/content/esicont/es/html/foreword.html', '/content/esicont/html/vin.html']
  const iconsComponents = ['<IoInformationCircleSharp />']

  return (
    <>
      <div className='container'>
        <div className='container_lateral_menu'>
          {/* Header icons */}
          <a href='/content/DefaultPage.html' target="contentIframe">
            <div className='container_icon_header'>
              <div className='icon_header_grid'>
                <div className='iconsBack'></div>
                <div className='iconFront'></div>
                <div className='iconLateral'></div>
              </div>
            </div>
          </a>

          {/* Arrow buttom */}
          <div className="arrowButtom">
            <IoIosArrowBack />
          </div>

          {/* Icons content */}
          <div className='container_content'>
            <div className="container_items">
              
            </div>

            <div className="container_items">
              <p className="content_icon"><IoInformationCircleSharp /></p>
              <span className="content_description">Informaciones generales</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><PiEngineFill /></p>
              <span className="content_description">Motor</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><GiSpring /></p>
              <span className="content_description">Suspensiones</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><FaGears /></p>
              <span className="content_description">Sistema de transmisión/Ejes</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><GiCarWheel /></p>
              <span className="content_description">Frenos</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><GiGearStickPattern /></p>
              <span className="content_description">Cambio/Cambio con diferencial</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><GiSteeringWheel /></p>
              <span className="content_description">Dirección</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><MdAir /></p>
              <span className="content_description">Calentador, ventilador y aire acondicionado</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><MdOutlineSecurity /></p>
              <span className="content_description">Dispositivos de retensión</span>
            </div>
            <div className="container_items">
              <p className="content_icon"><IoCarSport /></p>
              <span className="content_description">Carroceria y accesorios</span>
            </div>

            <hr />

            <a href="/content/esicont/es/srvc/html/B3E000000013W01.html" target="contentIframe">
              <div className="container_items">
                <p className="content_icon"><MdContentPasteSearch /></p>
                <span className="content_description">Mantenimiento preventivo</span>
              </div>
            </a>
          </div>
        </div>

        

        <div className='container_header'>
          <div className='searchBox'>
            <SearchEngine/>
          </div>
          <div className='contentOptions'>
            <Buttom label = {labelsButtoms[0]} url={url[0]}/>
            <Buttom label = {labelsButtoms[1]} />
            <Buttom label = {labelsButtoms[2]} url={url[1]} />
            <Profile/>
          </div>
        </div>
        <div className='container_body'>
          <iframe className="iframeContent" name="contentIframe" src="/content/DefaultPage.html" frameborder="0"></iframe>
        </div>
        <div className='container_footer'>
          <p className='label_footer'>Workshop Manual 2003 - 2009</p>
          {/* <p className='label_footer'>2003 - 2008</p> */}
        </div>
      </div>
    </>
  )
}

export default HomePage