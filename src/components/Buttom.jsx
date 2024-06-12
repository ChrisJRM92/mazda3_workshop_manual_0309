import './styles/Buttom.css'

const Buttom = ({ label, url, printData }) => {

  const handleClick = () => {
    if (printData) {
      // alert('funciona el boton imprimir')
    let iframe = document.getElementById('print');
    let iframeWindow = iframe.contentWindow;
    iframeWindow.focus();
    iframeWindow.print();
    }
  };

  return (
    <div className="componentButtoms">
      <a onClick={handleClick} href={url} target='contentIframe'><button className="buttomClass">{label}</button></a>
    </div>
  )
}

export default Buttom