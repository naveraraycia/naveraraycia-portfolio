import { useContext } from "react"
import AppContext from "../context/AppContext"

function Button({version, children, isBlock}) {
  const {darkMode} = useContext(AppContext)
  return (
    <button type='button' className={`${isBlock && 'w-full'} ${version === 'light-btn' && darkMode ? 'bg-white bg-opacity-10 text-white' : version === 'light-btn' && !darkMode ? 'text-[#5B137C] bg-[#F4E1F9]' : !darkMode && version === 'outlined' ? 'border-primary text-primary border-2' : darkMode && version === 'outlined' ? 'border-secondary text-secondary border-2' : 'gradient-btn text-white'}
    font-bold text-xs uppercase rounded-xl duration-300 px-14 py-4 hover:scale-110`}
    >{children}</button>
  )
}

export default Button