import './styles/Buttom.css'

const Buttom = ({ label, url }) => {
  return (
    <div className="componentButtoms">
      <a href={url} target='contentIframe'><button className="buttomClass">{label}</button></a>
    </div>
  )
}

export default Buttom