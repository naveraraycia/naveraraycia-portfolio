import { useContext } from "react"
import AppContext from "../context/AppContext"
import Window from "./Window"
import Button from './Button'

function ProjectItem({img, title, description, figma, url, isViewDarkColor, stack}) {
  const {darkMode} = useContext(AppContext)

  return (
    <div className="flex flex-col justify-center items-center space-y-5 max-w-[1100px] lg:flex-row lg:space-y-0 lg:space-x-10">
      <div className="lg:w-1/2">
        <Window version='purple'>
          <div className="relative project-img duration-500">
            <img src={img} alt="Project" className="object-cover duration-500" />
            <a target="_blank" rel="noreferrer"href={url} className={`absolute project-overlay backdrop-blur-[5px] items-center justify-center top-0 bottom-0 left-0 right-0 bg-opacity-60 w-full h-full tracking-widest text-2xl hover:cursor-pointer duration-500 ${isViewDarkColor ? 'text-neutral font-bold' : 'text-white font-semibold'}`}>VIEW</a>
          </div>
        </Window>
      </div>

      <div className="space-y-5 w-full lg:w-1/2">
        <div className="space-y-2 w-full md:space-y-5">
          <div className="flex justify-between items-center">
            <h4 className={`font-extrabold text-2xl sm:text-3xl ${darkMode ? 'text-secondary' : 'text-primary'}`}>{title}</h4>
          </div>

          <div className="space-y-3">
            <p className={`${darkMode ? 'text-white' : 'text-neutral'} text-sm`}>{description}</p>

            <ul className={`flex flex-wrap text-xs sm:text-sm font-semibold ${darkMode ? 'text-[#61A1FF]' : 'text-primary'}`}>
              {stack.map((stackItem, index) => (
                <li key={index} className="mr-5">{stackItem}</li>
                ))}
            </ul>
          </div>
        </div>

        <div className="space-y-2 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-5">
          <a target="_blank" rel="noreferrer" href={url}>
            <Button>Visit</Button>
          </a>
          {figma !== null && (
            <a target="_blank" rel="noreferrer" href={figma}>
              <Button version="light-btn">Figma</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem