import Button from "../Button"
import { useContext } from "react"
import AppContext from "../../context/AppContext"

function Navbar({target}) {
  const {darkMode} = useContext(AppContext)
  // console.log(target);

  function toggleMenu() {
    const hamburgerIcon = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('menu')
    hamburgerIcon.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
  }
  return (
    <>
    <nav className={`font-sans flex justify-between items-center lg:space-x-10 ${darkMode === false ? 'text-neutral' : 'text-white'}`}>
      <div className="hidden lg:block">
        <Button>resume</Button> 
      </div>
      <ul className="hidden space-x-10 text-sm font-extralight lg:flex">
        <li>
          <a href="#" className="font-extrabold">Home</a></li>
        <li>
        <a href="#" className="">About Me</a>
        </li>
        <li>
        <a href="#" className="">Skill Set</a>  
        </li>
        <li>
        <a href="#" className="">Education</a>
        </li>
        <li>
        <a href="#" className="">Portfolio</a>   
        </li>
        <li>
        <a href="#" className="">Contact</a>
        </li>
      </ul>

      <div className="text-3xl font-black z-20">ray.</div>

      {/* Hamburger icon */}
      <div className="lg:hidden">
        <button id="menu-btn" onClick={toggleMenu} type="button" className="z-40 block hamburger lg:hidden focus:outline-none">
          <span className={`hamburger-top ${darkMode === true ? 'bg-white' : 'bg-neutral'}`}></span>
          <span className={`hamburger-middle ${darkMode === true ? 'bg-white' : 'bg-neutral'}`}></span>
          <span className={`hamburger-bottom ${darkMode === true ? 'bg-white' : 'bg-neutral'}`}></span>
        </button>
      </div>
    </nav>

    <ul id="menu" className={`text-white absolute top-0 bottom-0 left-0 hidden flex-col w-full min-h-screen justify-center items-center font-sans space-y-5 uppercase text-2xl bg-black bg-opacity-70 lg:hidden` }>
      <li>
        <a href="#" className={`${darkMode === true ? 'hover:text-secondary' : 'hover:text-primary'}`}>Home</a>
      </li>
      <li>
        <a href="#" className={`${darkMode === true ? 'hover:text-secondary' : 'hover:text-primary'}`}>About Me</a>
      </li>
      <li>
        <a href="#" className={`${darkMode === true ? 'hover:text-secondary' : 'hover:text-primary'}`}>Skill Set</a>
      </li>
      <li>
        <a href="#" className={`${darkMode === true ? 'hover:text-secondary' : 'hover:text-primary'}`}>Education</a>
      </li>
      <li>
        <a href="#" className={`${darkMode === true ? 'hover:text-secondary' : 'hover:text-primary'}`}>Portfolio</a>
      </li>
      <li>
        <a href="#" className={`${darkMode === true ? 'hover:text-secondary' : 'hover:text-primary'}`}>Contact</a>
      </li>
    </ul>
    </>
  )
}

export default Navbar