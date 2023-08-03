import { useContext } from "react"
import AppContext from "../context/AppContext"
import { useState } from "react"
import {AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import {FiFacebook, FiMoon} from 'react-icons/fi'
import { PiSunBold } from "react-icons/pi";

function FixedLinks() {
  const {darkMode, dispatch} = useContext(AppContext)
  const [selected, setSelected] = useState(1)

  return (
    <div className={`hidden relative z-50 md:flex`}>
      <div id="fixedLinks" className="fixed bottom-52 right-10">
        <ul className="space-y-8">
          <li data-aos='fade-up' data-aos-delay='2100' onClick={()=> dispatch({type: 'TOGGLE_MODE', payload: !darkMode})}>
            {darkMode === true ? (
              <PiSunBold size={30} className={`${darkMode === true && 'text-white hover:text-secondary'} hover:cursor-pointer`}/>
              ) : (
              <FiMoon size={30} className={`${darkMode === false && 'text-neutral hover:text-primary'} hover:cursor-pointer`}/>
            )}
          </li>
          <li data-aos='fade-up' data-aos-delay='2000'>
            <a href="https://github.com/naveraraycia" target="_blank">
              <AiFillGithub size={30} className={`${darkMode === true ? 'text-white hover:text-secondary' : 'text-neutral hover:text-primary'} hover:cursor-pointer`} />
            </a>
          </li>
          <li data-aos='fade-up' data-aos-delay='1900'>
            <a href="https://www.instagram.com/imraycie" target="_blank">
              <AiOutlineInstagram size={30} className={`${darkMode === true ? 'text-white hover:text-secondary' : 'text-neutral hover:text-primary'} hover:cursor-pointer`} />
            </a>
          </li>
          <li data-aos='fade-up' data-aos-delay='1800'>
            <a href="https://www.facebook.com/raynicornn" target="_blank">
              <FiFacebook size={30} className={`${darkMode === true ? 'text-white hover:text-secondary' : 'text-neutral hover:text-primary'} hover:cursor-pointer`} />
            </a>
          </li>
          <li data-aos='fade-up' data-aos-delay='1700'>
            <a href="https://www.linkedin.com/in/naveraraycia" target="_blank">
              <AiOutlineLinkedin size={30} className={`${darkMode === true ? 'text-white hover:text-secondary' : 'text-neutral hover:text-primary'} hover:cursor-pointer`} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FixedLinks