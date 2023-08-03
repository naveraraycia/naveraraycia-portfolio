import { useContext } from "react"
import AppContext from "../../context/AppContext"
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'

function Footer() {
  const {darkMode} = useContext(AppContext)
  const yearToday = new Date().getFullYear()

  return (
    <footer className={`w-full duration-300 pt-20 pb-10 flex flex-col justify-center items-center ${darkMode ? 'text-white bg-base-100' : 'text-neutral bg-light-base-100'}`}>
      <div className="space-y-5 flex flex-col justify-center items-center">
        <div className="space-x-5 flex md:hidden">
          <a href="https://www.linkedin.com/in/naveraraycia" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin size={35} className={`${darkMode ? 'text-secondary hover:text-primary' : 'text-primary hover:text-secondary'} duration-150 hover:scale-110`} />
          </a>

          <a href="https://github.com/naveraraycia" rel="noreferrer" target="_blank">
            <AiFillGithub size={35} className={`${darkMode ? 'text-secondary hover:text-primary' : 'text-primary hover:text-secondary'} duration-150 hover:scale-110`} />
          </a>

          <a href="https://www.instagram.com/imraycie" rel="noreferrer" target="_blank">
            <AiOutlineInstagram size={35} className={`${darkMode ? 'text-secondary hover:text-primary' : 'text-primary hover:text-secondary'} duration-150 hover:scale-110`} />
          </a>

          <a href="https://www.facebook.com/raynicornn" rel="noreferrer" target="_blank">
            <FiFacebook size={35} className={`${darkMode ? 'text-secondary hover:text-primary' : 'text-primary hover:text-secondary'} duration-150 hover:scale-110`} />
          </a>
        </div>

        <div className="font-semibold flex flex-col items-center justify-center text-center">
          <p className="text-xs sm:text-sm">Designed and developed by Raycia Navera</p>
          <p className="text-sm">Copyright &copy; {yearToday}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer