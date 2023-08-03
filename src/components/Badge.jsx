import { useContext } from "react"
import AppContext from "../context/AppContext"

function Badge({version, children}) {
  return (
    <div className={`${version === 'purple' ? 'bg-primary text-white md:text-md' : version === 'pink' ? 'bg-[#D4107F] text-white md:text-md' : ''} flex items-center justify-center text-center w-full rounded-lg py-2 px-5 uppercase text-[10px] sm:text-xs sm:w-fit md:px-10 md:py-3`}>{children}</div>
  )
}

export default Badge