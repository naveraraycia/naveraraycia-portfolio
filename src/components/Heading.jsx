import { useContext } from "react"
import AppContext from "../context/AppContext"

function Heading({version, number, title}) {
  const {darkMode} = useContext(AppContext)
  return (
    <div className="font-sans font-black">
      <h4 className={`text-4xl ${darkMode === true ? 'text-white' : 'text-neutral'}`}>{number}</h4>
      <h2 className={`text-5xl text-transparent bg-clip-text w-fit ${version === 'purple' ? 'bg-gradient-to-r from-secondary to-primary' : 'bg-gradient-to-r from-primary to-[#5596DE]'}`}>{title}</h2>
    </div>
  )
}

export default Heading