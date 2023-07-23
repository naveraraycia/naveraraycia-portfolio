import { useContext } from "react"
import AppContext from "../context/AppContext"
import Window from "../components/Window"
import gradPic from '../assets/naveraraycia-graduation-photo.jpg'
import formalPic from '../assets/naveraraycia-formal-photo.jpg'
import smFormalPic from '../assets/sm-formalpic.jpg'
import smGradPic from '../assets/sm-gradpic.jpg'
import Heading from "../components/Heading"

function About() {
  const {darkMode} = useContext(AppContext)
  return (
    <div id="about" className={`px-5 pt-40 pb-60 md:px-32 space-y-28 ${darkMode === true ? 'bg-base-100' : 'bg-light-base-100'}`}>
      <div className={`flex flex-col items-center space-y-14 ${darkMode === true ? 'text-white' : 'text-neutral'} md:space-y-32 xl:flex-row xl:items-left`}>

        {/* photos */}
        <div className="flex flex-col space-y-5 w-full justify-center items-center md:flex-row md:space-x-5 md:w-fit translate-x-0 md:translate-x-10 xl:translate-x-0">
          <div className="flex-none z-40 duration-500 w-full md:hover:z-50 md:hover:scale-110 md:w-fit">
            <Window version='purple'>
              <img src={gradPic} alt="Gradaution Photo" className="hidden h-[300px] w-full md:w-[280px] md:h-[340px] object-cover md:block xl:w-full" />
              <img src={smGradPic} alt="Gradaution Photo" className="h-[300px] w-full md:w-[280px] md:h-[340px] object-cover md:hidden xl:w-full" />
            </Window>
          </div>

          <div className="flex-none duration-500 w-full md:hover:z-50 md:hover:scale-110 md:-translate-x-32 md:translate-y-28 md:w-fit">
            <Window version='purple'>
              <img src={formalPic} alt="Gradaution Photo" className="hidden h-[300px] w-full md:w-[280px] md:h-[340px] object-cover md:block xl:w-full" />

              <img src={smFormalPic} alt="Gradaution Photo" className="h-[300px] w-full md:w-[280px] md:h-[340px] object-cover md:hidden xl:w-full" />
          </Window>
        </div>
        </div>

      {/* Description */}
      <div className="relative w-full space-y-4 lg:w-fit">

        <div >
          <div className={`absolute w-[400px] h-[400px] top-10 blur-3xl left-24 rounded-full ${darkMode === true ? 'bg-[#6A25C7]' : 'bg-[#C4F7FC]'}`}></div>
            <div className={`absolute w-[400px] bottom-5 left-60 blur-3xl h-[400px] rounded-full ${darkMode === true ? 'bg-[#F857E7]' : 'bg-[#FEBEFF]'}`}></div>
        </div>
        
        <div className="relative">
          <Heading version='purple' number='01' title='About.' />
        </div>

        <div className="z-50 relative space-y-14 max-w-[700px]">
          <p className={`${darkMode === true ? 'text-white' : 'text-neutral'}`}>Hi! My name is <span className={`font-bold ${darkMode === true ? 'text-secondary' : 'text-primary'}`}>Raycia</span> and I find joy in programming and all things web, specially front-end web development. My interest in overall computer programming started way back in 2017 when I first had my HTML class during my senior years in high school. It has always fascinated me every time my program worked as intended and whenever I am able to transform web designs into a fully functioning website. It gave me a strong sense of satisfaction. This is part of the reason why I took the degree I completed. I’ve encountered lots of programming languages throughout my university years, but I found web development the most interesting and fun. I am a person who appreciates and loves creating art aside from all the tech stuff, which is why web design and development seemed more like a fun activity to me rather than a work.</p>

          <p>From creating websites using plain old HTML and CSS with the use of notepad++ as my code editor before, now I can create full-stack projects using the latest technologies due to my years of learning in college as well as my hard work in self-studying Udemy courses (because I believe that learning and growth shall never stop!).</p>
        </div>

      </div>
       
      </div>
    </div>
  )
}

export default About
