import { useContext } from "react"
import AppContext from "../context/AppContext"
import Button from "../components/Button"
import { Link } from "react-router-dom"

function NotFound() {
  const {darkMode} = useContext(AppContext)
  const yearToday = new Date().getFullYear()
  return (
    <div className={`h-screen p-5 flex flex-col space-y-10 justify-center items-center w-full ${darkMode ? 'bg-base-100 text-white' : 'text-neutral bg-light-base-100'}`}>
      <div className="space-y-5 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center text-center items-center  md:-space-y-3">
          <h3 className='font-black text-3xl md:text-4xl'>404</h3>
          <h1 className="text-3xl font-black text-transparent bg-clip-text w-fit bg-gradient-to-r from-secondary to-primary md:leading-relaxed sm:text-4xl md:text-6xl">Page Not Found!</h1>
        </div> 

        <p className="text-sm text-center max-w-xs md:max-w-[400px] md:text-xl">Looks like the page you are looking for does not exist.</p>

        <Link to={'/'}>
          <Button version={'purple'}>Take me back</Button> 
        </Link>
      </div>

      <div className="absolute bottom-10 font-semibold flex flex-col text-center items-center justify-center">
        <p className="text-xs sm:text-sm">Designed and developed by Raycia Navera</p>
        <p className="text-sm">Copyright &copy; {yearToday}</p>
      </div>
    </div>
  )
}

export default NotFound