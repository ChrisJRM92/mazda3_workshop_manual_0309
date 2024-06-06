import './styles/Profile.css'

const Profile = () => {
  return (
    <a className='containerProfile' href="https://christianromero.netlify.app/#home" target='_blank'>
      <p className="profileLink"></p>
      <img className="profileDev" src="/images/profiledev.png" alt="christian Romero" />
    </a>
  )
}

export default Profile