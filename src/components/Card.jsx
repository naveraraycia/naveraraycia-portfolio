import { useContext } from "react"
import AppContext from "../context/AppContext"

function Card({children}) {
  const {darkMode} = useContext(AppContext)
  return (
    <div className={`${darkMode === true ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} p-10 rounded-xl w-full flex items-center justify-center`}>{children}</div>
  )
}

export default Card