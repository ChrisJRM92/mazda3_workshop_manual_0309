import './styles/Buttom.css'

const Buttom = ({ label }) => {
  return (
    <div className="componentButtoms">
      <button className="buttomClass">{label}</button>
    </div>
  )
}

export default Buttom