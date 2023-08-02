import { useContext } from "react"
import AppContext from "../context/AppContext"

function Badge({version, outline, children}) {
  const {darkMode} = useContext(AppContext)
  return (
    <div className={`${version === 'purple' ? 'text-xs bg-primary text-white md:text-md' : version === 'pink' ? 'text-xs bg-[#D4107F] text-white md:text-md' : ''} flex items-center justify-center text-center w-full rounded-lg py-2 px-5 uppercase sm:w-fit md:px-10 md:py-3`}>{children}</div>
  )
}

export default Badge