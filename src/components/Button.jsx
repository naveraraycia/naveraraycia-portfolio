import { useContext } from "react"
import AppContext from "../context/AppContext"

function Button({version, children}) {
  const {darkMode} = useContext(AppContext)
  return (
    <button className={`${version === 'outlined' ? 'border' : 'gradient-btn text-white'} ${darkMode === false && version === 'outlined' ? 'border-primary text-primary border-2' : darkMode === true && version === 'outlined' ? 'border-secondary text-secondary border-2' : ''}
    font-bold text-xs uppercase rounded-xl duration-300 px-14 py-4 hover:scale-110`}
    >{children}</button>
  )
}

export default Button