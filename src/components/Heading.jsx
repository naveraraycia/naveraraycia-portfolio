import { useContext } from "react"
import AppContext from "../context/AppContext"

function Heading({version, number, title, isCentered}) {
  const {darkMode} = useContext(AppContext)
  
  return (
    <div className={`font-sans font-black ${isCentered && 'flex flex-col justify-center items-center text-center'}`}>
      <h4 className={`text-3xl ${darkMode ? 'text-white' : 'text-neutral'}`}>{number}</h4>
      <h2 className={`text-4xl text-transparent bg-clip-text w-fit ${version === 'purple' ? 'bg-gradient-to-r from-secondary to-primary' : darkMode && version === 'white' ? 'text-white' : 'bg-gradient-to-r from-primary to-[#5596DE]'}`}>{title}</h2>
    </div>
  )
}

export default Heading