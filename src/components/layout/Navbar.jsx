import { useContext } from "react"
import AppContext from "../../context/AppContext"
import Button from "../Button"
import { FiMoon } from 'react-icons/fi'
import { PiSunBold } from "react-icons/pi";

function Navbar() {
  const {darkMode, dispatch} = useContext(AppContext)

  function toggleMenu() {
    const hamburgerIcon = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('menu')
    hamburgerIcon.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
  }

  function handleClickScroll(idName){
    const sectionToScroll = document.getElementById(`${idName}`)

    sectionToScroll.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
    <nav className={`font-sans px-5 py-10 md:px-32 ${!darkMode ? 'text-neutral' : 'text-white'}`}>
      <div data-aos='fade-down' data-aos-delay='50' className="flex justify-between items-center lg:space-x-10">
        <div className="hidden lg:block">
          <Button>resume</Button> 
        </div>
        <ul className="hidden space-x-10 text-sm font-extralight lg:flex">
          <li onClick={() => handleClickScroll('home')} className="font-extrabold">Home</li>
          <li onClick={() => handleClickScroll('about')}>About Me</li>
          <li onClick={() => handleClickScroll('skillSet')}>Skill Set</li>
          <li onClick={() => handleClickScroll('education')}>Education</li>
          <li onClick={() => handleClickScroll('portfolio')}>Portfolio</li>
          <li onClick={() => handleClickScroll('contact')}>Contact</li>
        </ul>

        <div className="text-3xl font-black z-20">ray.</div>

        {/* Hamburger icon */}
        <div className="lg:hidden relative">
          <div className="absolute right-12 bottom-[3px] md:hidden" onClick={()=> dispatch({type: 'TOGGLE_MODE', payload: !darkMode})}>
            {darkMode === true ? (
              <PiSunBold size={24} className={`${darkMode && 'text-white hover:text-secondary'} hover:cursor-pointer`}/>
              ) : (
              <FiMoon size={24} className={`${!darkMode && 'text-neutral hover:text-primary'} hover:cursor-pointer`}/>
            )}
          </div>

          <button id="menu-btn" onClick={toggleMenu} type="button" className="z-[100] block hamburger lg:hidden focus:outline-none">
            <span className={`hamburger-top ${darkMode === true ? 'bg-white' : 'bg-neutral'}`}></span>
            <span className={`hamburger-middle ${darkMode === true ? 'bg-white' : 'bg-neutral'}`}></span>
            <span className={`hamburger-bottom ${darkMode === true ? 'bg-white' : 'bg-neutral'}`}></span>
          </button>
        </div>
      </div>
    </nav>

    <ul id="menu" onClick={toggleMenu} className={`text-white fixed z-[99] top-0 bottom-0 left-0 hidden flex-col w-full min-h-screen items-center font-sans space-y-5 uppercase text-2xl bg-black bg-opacity-70 lg:hidden` }>
      <li onClick={() => handleClickScroll('home')} className={`${darkMode ? 'hover:text-secondary' : 'hover:text-primary'} mt-40 hover:cursor-pointer`}>Home</li>
      <li onClick={() => handleClickScroll('about')} className={`${darkMode ? 'hover:text-secondary' : 'hover:text-primary'} hover:cursor-pointer`}>About Me</li>
      <li onClick={() => handleClickScroll('skillSet')} className={`${darkMode ? 'hover:text-secondary' : 'hover:text-primary'} hover:cursor-pointer`}>Skill Set</li>
      <li onClick={() => handleClickScroll('education')} className={`${darkMode ? 'hover:text-secondary' : 'hover:text-primary'} hover:cursor-pointer`}>Education</li>
      <li onClick={() => handleClickScroll('portfolio')} className={`${darkMode ? 'hover:text-secondary' : 'hover:text-primary'} hover:cursor-pointer`}>Portfolio</li>
      <li onClick={() => handleClickScroll('contact')} className={`${darkMode ? 'hover:text-secondary' : 'hover:text-primary'} hover:cursor-pointer`}>Contact</li>
    </ul>
    </>
  )
}

export default Navbar