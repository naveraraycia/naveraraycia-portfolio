import { useContext } from "react"
import AppContext from "../context/AppContext"
import Window from "./Window"
import Aesthetica from '../assets/projects/Aesthetica.png'
import Button from './Button'

function ProjectItem({img, title, description, figmaLink, siteLink, badgeTitle, stackArr}) {
  const {darkMode} = useContext(AppContext)

  return (
    <div className="flex flex-col space-y-10 justify-center items-center max-w-[1100px]">
      <div className="">
        <Window version='purple'>
          <div className="relative project-img duration-500">
            <img src={Aesthetica} alt="Aesthetica" className="object-cover duration-500" />
            <a href='#' className="absolute project-overlay backdrop-blur-[5px] items-center justify-center text-white font-semibold top-0 bottom-0 left-0 right-0 bg-opacity-60 w-full h-full tracking-widest text-2xl hover:cursor-pointer duration-500">VIEW</a>
          </div>
        </Window>
      </div>

  
      <div className="space-y-10 w-full">
        <div className="flex justify-between items-center">
          <h4 className={`font-extrabold text-3xl ${darkMode ? 'text-secondary' : 'text-primary'}`}>Aesthetica</h4>
          <div className="hidden space-x-5 lg:flex">
            <a href="#">
              <Button>Visit Site</Button>
            </a>
            <a href="#">
              <Button version="light-btn">View Figma</Button>
            </a>
          </div>
        </div>

        <div>
          <p className={`${darkMode ? 'text-white' : 'text-neutral'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>

        <div className={`flex space-x-5 ${darkMode ? 'text-[#61A1FF]' : 'text-primary'}`}>
          <p>React JS</p>
          <p>Tailwind CSS</p>
          <p>Firebase</p>
        </div>

        <div className="space-x-5 flex lg:hidden">
            <a href="#">
              <Button>Visit Site</Button>
            </a>
            <a href="#">
              <Button version="light-btn">View Figma</Button>
            </a>
          </div>
      </div>
    
    </div>
  )
}

export default ProjectItem