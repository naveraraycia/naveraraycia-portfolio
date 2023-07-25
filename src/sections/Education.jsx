import { useContext } from "react"
import AppContext from "../context/AppContext"
import gradPic1 from '../assets/graduation-pic1.jpg'
import gradPic2 from '../assets/graduation-pic2.jpg'
import Window from "../components/Window"
import Heading from "../components/Heading"

function Education() {
  const {darkMode} = useContext(AppContext)

  return (
    <section id="education" className={`px-5 pt-40 pb-60 md:px-32 space-y-20 ${darkMode === true ? 'bg-base-100' : 'bg-light-base-100'} duration-300`}>
      <div className={`flex flex-col items-center space-y-14 ${darkMode === true ? 'text-white' : 'text-neutral'} md:space-y-32 xl:flex-row xl:items-left`}>
        {/* photos */}
        <div className="flex flex-col space-y-5 w-full justify-center items-center sm:flex-row sm:space-x-5 sm:space-y-0 sm:w-fit translate-x-0 md:translate-x-10 xl:translate-x-0">
          <div className="duration-500 md:hover:z-50 md:hover:scale-110 md:w-fit md:flex-none">
            <Window version='purple'>
              <img src={gradPic2} alt="Gradaution Photo" className="hidden h-[300px] w-full md:w-[280px] md:h-[340px] object-cover md:block xl:w-full" />

              <img src={gradPic2} alt="Gradaution Photo" className="w-[250px] object-cover md:hidden" />
            </Window>
          </div>

          <div className="z-40 duration-500 md:hover:z-50 md:hover:scale-110 md:-translate-x-32 md:translate-y-28 md:w-fit md:flex-none">
            <Window version='blue'>
              <img src={gradPic1} alt="Gradaution Photo" className="hidden h-[300px] w-full md:w-[280px] md:h-[340px] object-cover md:block xl:w-full" />

              <img src={gradPic1} alt="Gradaution Photo" className="w-[250px] object-cover md:hidden" />
          </Window>
        </div>
        </div>
        {/* Description */}
        <div className="space-y-28">
          <div className="relative w-full space-y-4 lg:w-fit">
            <div>
              <div className={`absolute w-[400px] h-[400px] top-40 blur-3xl left-0 rounded-full ${darkMode === true ? 'bg-[#6A25C7]' : 'bg-[#C4F7FC]'}`}></div>
              <div className={`absolute w-[400px] top-56 left-32 blur-3xl h-[400px] rounded-full ${darkMode === true ? 'bg-[#F857E7]' : 'bg-[#FEBEFF]'}`}></div>
            </div>
            
            <div className="relative">
              <Heading version='purple' number='03' title='Education.' />
            </div>

            <div className="z-50 relative space-y-14 max-w-[500px]">
              <p>I attended the same institution for both my Senior years in High School as well as college. I graduated from college last September 23, 2022 with the degree below.</p>
            </div>
          </div>

          <div className="relative z-40 space-y-10 max-w-[700px]">
            <div className="space-y-2 uppercase">
              <div className="space-y-1">
                <h4 className="font-bold text-lg">Bachelor of science in</h4>
                <h2 className="font-black text-4xl">Computer Engineering</h2>
              </div>
              <h3 className="font-black text-xl">Major in Software Engineering</h3>
            </div>
            <div className="space-y-5 max-w-[400px]">
              <h3 className={`font-extrabold ${darkMode ? 'text-white' : 'text-[#3D8396]'}`}>De La Salle University - Dasmarinas, Philippines</h3>
              <div className={`rounded-full py-4 px-10 font-black w-fit ${darkMode ? 'text-secondary bg-white bg-opacity-10' : 'text-[#48C0C3] bg-white'}`}>2018 - 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education