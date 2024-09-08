import { IoInformationCircleSharp } from "react-icons/io5";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const GenInfTest = () => {
  return (
    <div className="container_items">
      <Accordion>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography>Informaciones generales</Typography>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography>Informaciones generales</Typography>
          </AccordionSummary>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
          <div className="DataLinks">
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000001W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Como usar el manual</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000002W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Unidades de medida</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000004W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Precauciones de mantenimiento</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000005W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Instalación sistema radio</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000006W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Instalación eléctrica</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000007W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Posiciones elevación con gato</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000009W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Remolque</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000010W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Posición numero de identificación</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000020W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Nuevos términos unificados</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000011W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Abreviaturas</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000012W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Control Pre-entrega</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000013W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Mantenimiento programado</a>
          </div>
          </Typography> */}
        </AccordionDetails>
      </Accordion>



      {/* <p className="content_icon"><label className="chk_component" htmlFor="chk"><IoInformationCircleSharp /></label></p>
      <details className="content_description_1">
        <summary className="sum1">Informaciones generales</summary>
        <details className="content_description_2">
          <summary className="sum2">Informaciones generales</summary>
          <div className="DataLinks">
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000001W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Como usar el manual</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000002W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Unidades de medida</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000004W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Precauciones de mantenimiento</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000005W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Instalación sistema radio</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000006W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Instalación eléctrica</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000007W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Posiciones elevación con gato</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000009W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Remolque</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000010W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Posición numero de identificación</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000020W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Nuevos términos unificados</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000011W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Abreviaturas</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000012W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Control Pre-entrega</a>
            <a className="Data" href="/content/esicont/es/srvc/html/B3E000000013W01.html" target="contentIframe"><i className="fa-solid fa-file-lines"></i>Mantenimiento programado</a>
          </div>
        </details>
      </details> */}
    </div>
  )
}

export default GenInfTest