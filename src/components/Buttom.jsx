import './styles/Buttom.css'

const Buttom = ({ label, icon: Icon, url, printData }) => {

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
      <a onClick={handleClick} href={url} target='contentIframe'><button className="buttomClass">{Icon && <Icon />}{label}</button></a>
    </div>
  )
}

export default Buttom