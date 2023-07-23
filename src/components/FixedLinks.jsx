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
    <div className={`hidden md:flex`}>
      <div id="fixedDots" className="fixed bottom-52 left-10">
        <ul className="space-y-8">
          <li onClick={() => setSelected(1)} className={`${darkMode === false ? 'hover:bg-neutral' : ' hover:bg-secondary'} ${selected === 1 && darkMode === false ? 'bg-neutral' : selected === 1 && darkMode === true ? 'bg-secondary' : 'bg-[#D9D9D9]'}
           bg-[#D9D9D9] hover:cursor-pointer 
          `}></li>
          <li onClick={() => setSelected(2)} className={`${darkMode === false ? 'hover:bg-neutral' : ' hover:bg-secondary'} ${selected === 2 && darkMode === false ? 'bg-neutral' : selected === 2 && darkMode === true ? 'bg-secondary' : 'bg-[#D9D9D9]'}
           bg-[#D9D9D9] hover:cursor-pointer 
          `}></li>
          <li onClick={() => setSelected(3)} className={`${darkMode === false ? 'hover:bg-neutral' : ' hover:bg-secondary'} ${selected === 3 && darkMode === false ? 'bg-neutral' : selected === 3 && darkMode === true ? 'bg-secondary' : 'bg-[#D9D9D9]'}
           bg-[#D9D9D9] hover:cursor-pointer 
          `}></li>
          <li onClick={() => setSelected(4)} className={`${darkMode === false ? 'hover:bg-neutral' : ' hover:bg-secondary'} ${selected === 4 && darkMode === false ? 'bg-neutral' : selected === 4 && darkMode === true ? 'bg-secondary' : 'bg-[#D9D9D9]'}
           bg-[#D9D9D9] hover:cursor-pointer 
          `}></li>
          <li onClick={() => setSelected(5)} className={`${darkMode === false ? 'hover:bg-neutral' : ' hover:bg-secondary'} ${selected === 5 && darkMode === false ? 'bg-neutral' : selected === 5 && darkMode === true ? 'bg-secondary' : 'bg-[#D9D9D9]'}
           bg-[#D9D9D9] hover:cursor-pointer 
          `}></li>
          <li onClick={() => setSelected(6)} className={`${darkMode === false ? 'hover:bg-neutral' : ' hover:bg-secondary'} ${selected === 6 && darkMode === false ? 'bg-neutral' : selected === 6 && darkMode === true ? 'bg-secondary' : 'bg-[#D9D9D9]'}
           bg-[#D9D9D9] hover:cursor-pointer 
          `}></li>
          
        </ul>
      </div>

      <div id="fixedLinks" className="fixed bottom-52 right-10">
        <ul className="space-y-8">
          <li onClick={()=> dispatch({type: 'TOGGLE_MODE', payload: !darkMode})}>
            {darkMode === true ? (
              <PiSunBold size={30} className={`${darkMode === true && 'text-white hover:text-secondary'} hover:cursor-pointer`}/>
              ) : (
              <FiMoon size={30} className={`${darkMode === false && 'text-neutral hover:text-primary'} hover:cursor-pointer`}/>
            )}
          </li>
          <li>
            <a href="#">
              <AiFillGithub size={30} className={`${darkMode === true ? 'text-white hover:text-secondary' : 'text-neutral hover:text-primary'} hover:cursor-pointer`} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineInstagram size={30} className={`${darkMode === true ? 'text-white hover:text-secondary' : 'text-neutral hover:text-primary'} hover:cursor-pointer`} />
            </a>
          </li>
          <li>
            <a href="#">
              <FiFacebook size={30} className={`${darkMode === true ? 'text-white hover:text-secondary' : 'text-neutral hover:text-primary'} hover:cursor-pointer`} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineLinkedin size={30} className={`${darkMode === true ? 'text-white hover:text-secondary' : 'text-neutral hover:text-primary'} hover:cursor-pointer`} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FixedLinks