import './styles/Buttom.css'

const Buttom = ({ label }) => {
  return (
    <div className="componentButtoms">
      <a href="/content/esicont/es/html/foreword.html" target='contentIframe'><button className="buttomClass">{label}</button></a>
    </div>
  )
}

export default Buttom