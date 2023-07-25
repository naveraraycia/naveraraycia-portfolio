import { useContext } from "react"
import AppContext from "../context/AppContext"

function CourseItem({img, dateCompleted, instructor, number}) {
  const {darkMode} = useContext(AppContext)

  return (
    <div className={`${darkMode ? 'bg-neutral bg-opacity-30': 'bg-white bg-opacity-50'} rounded-[20px] p-3 pb-5 h-full w-fit md:p-10`}>
      <div className="space-y-5">
        <div className="relative">
          <img src={img} alt="Certificate" className="w-[500px] object-cover rounded-[20px]" />
          <a href={img} target={"_blank"} className="absolute right-0 bottom-3 scale-75 btn btn-primary px-10 text-white font-extrabold hover:bg-primary hover:scale-90 duration-300 md:right-2 md:bottom-5">view</a>
        </div>

        <div className="flex items-center mx-3 justify-between md:mx-0">
          <div>
            <div className="space-x-4">
              <span className={`font-extrabold ${darkMode ? 'text-[#98F1FF]' : 'text-primary'} text-sm md:text-lg`}>Completed:</span>
              <span className="text-xs md:text-md">{dateCompleted}</span>
            </div>
            <div className="space-x-4">
              <span className={`font-extrabold ${darkMode ? 'text-[#98F1FF]' : 'text-primary'} text-sm md:text-lg`}>Instructor:</span>
              <span className="text-xs md:text-md">{instructor}</span>
            </div>
          </div>

          <div className={`py-2 px-4 rounded-full ${darkMode ? 'bg-neutral' : 'bg-primary'} text-white font-extrabold text-sm md:text-xl`}>{number}</div>
        </div>


      </div>
      
    </div>
  )
}

export default CourseItem