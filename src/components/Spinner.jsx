import { useContext } from "react"
import AppContext from "../context/AppContext"

function Spinner() {
  const {darkMode} = useContext(AppContext)
  
  return (
    <div className={`h-screen flex space-y-5 flex-col justify-center items-center ${darkMode ? 'bg-base-100' : 'bg-light-base-100'}`}>
      <div className='font-black text-3xl bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text w-fit'>Raycia</div>
      <span className={`loading loading-infinity loading-lg scale-[2] text-primary`}></span>
    </div>
  )
}

export default Spinner