import { useContext } from "react"
import AppContext from "../context/AppContext"

function Badge({version, outline, children}) {
  const {darkMode} = useContext(AppContext)
  return (
    <div className={`${version === 'purple' ? 'text-xs bg-primary text-white md:text-md' : version === 'pink' ? 'text-xs bg-[#D4107F] text-white md:text-md' : ''} ${outline === true && darkMode === true ? ' border-4 border-neutral border-opacity-30 w-full font-black bg-transparent text-white text-lg' : outline === true && darkMode === false ? 'border-4 border-primary text-lg bg-transparent w-full text-primary font-black' : ''}  flex items-center justify-center text-center w-fit rounded-lg py-2 px-5 uppercase md:px-10 md:py-2`}>{children}</div>
  )
}

export default Badge