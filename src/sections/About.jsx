import { useContext } from "react"
import AppContext from "../context/AppContext"
import Window from "../components/Window"
import Heading from "../components/Heading"
import Button from '../components/Button'
import Badge from "../components/Badge"
import gradPic from '../assets/naveraraycia-graduation-photo.jpg'
import formalPic from '../assets/naveraraycia-formal-photo.jpg'
import smFormalPic from '../assets/sm-formalpic.jpg'
import smGradPic from '../assets/sm-gradpic.jpg'

function About() {
  const {darkMode} = useContext(AppContext)
  const birthdate = new Date('11-04-1999')
  const diffToNow = Date.now() - birthdate.getTime()
  const ageDate = new Date(diffToNow)
  const ageAutomatic = Math.abs(ageDate.getFullYear() - 1970)

  function handleClickScroll(idName){
    const sectionToScroll = document.getElementById(`${idName}`)
    sectionToScroll.scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <section className={`overflow-x-hidden px-5 pb-32 space-y-10 ${darkMode ? 'bg-base-100' : 'bg-light-base-100'} duration-300 sm:pt-5 xl:space-y-32`}>
      <div data-aos='fade-up' data-aos-delay='200' className="relative container mx-auto flex px-5 items-center justify-center z-20">
        <div id="about" className={`flex flex-col items-center space-y-14 ${darkMode ? 'text-white' : 'text-neutral'} md:space-y-32 xl:flex-row xl:items-left`}>
          <div className="flex relative z-10 flex-col space-y-5 w-full justify-center items-center sm:flex-row sm:space-x-5 sm:space-y-0 sm:w-fit translate-x-0 md:translate-x-10 xl:translate-x-0">
            <div className="z-40 duration-500 md:hover:z-50 md:hover:scale-110 md:w-fit md:flex-none">
              <Window version='purple'>
                <img src={gradPic} alt="Gradaution Photo" className="hidden h-[300px] w-full md:w-[280px] md:h-[340px] object-cover md:block xl:w-full" />

                <img src={smGradPic} alt="Gradaution Photo" className="w-[250px] object-cover md:hidden" />
              </Window>
            </div>

            <div className="duration-500 md:hover:z-50 md:hover:scale-110 md:-translate-x-32 md:translate-y-28 md:w-fit md:flex-none">
              <Window version='purple'>
                <img src={formalPic} alt="Gradaution Photo" className="hidden h-[300px] w-full md:w-[280px] md:h-[340px] object-cover md:block xl:w-full" />
                <img src={smFormalPic} alt="Gradaution Photo" className="w-[250px] object-cover md:hidden" />
              </Window>
            </div>
          </div>

          <div className="relative w-full space-y-4 lg:w-fit">
            <div className={`${darkMode && 'opacity-60'}`}>
              <div className={`absolute w-[400px] h-[400px] top-10 blur-3xl left-24 rounded-full ${darkMode ? 'bg-[#6A25C7]' : 'bg-[#C4F7FC]'}`}></div>
              <div className={`absolute w-[400px] bottom-5 left-60 blur-3xl h-[400px] rounded-full ${darkMode ? 'bg-[#F857E7]' : 'bg-[#FEBEFF]'}`}></div>
            </div>
            
            <div className="relative">
              <Heading version='purple' number='01' title='About.' />
            </div>

            <div className="z-50 relative space-y-10 max-w-[700px] text-sm">
              <p>Hi! My name is <span className={`font-bold ${darkMode ? 'text-secondary' : 'text-primary'}`}>Raycia</span> and I find joy in programming and all things web, specially front-end web development. My interest in overall computer programming started way back in 2017 when I first had my HTML class during my senior years in high school. It has always fascinated me every time my program worked as intended and whenever I am able to transform web designs into a fully functioning website. It gave me a strong sense of satisfaction. This is part of the reason why I took the degree I completed. I’ve encountered lots of programming languages throughout my university years, but I found web development the most interesting and fun. I am a person who appreciates and loves creating art aside from all the tech stuff, which is why web design and development seemed more like a fun activity to me rather than a work.</p>

              <p>From creating websites using plain old HTML and CSS with the use of notepad++ as my code editor before, now I can create full-stack projects using the latest technologies due to my years of learning in college as well as my hard work in self-studying Udemy courses (because I believe that learning and growth shall never stop!).</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos='fade-up' data-aos-delay='400' className="container px-5 mx-auto">
        <div className={`flex flex-col items-center justify-center space-y-10 ${darkMode ? 'text-white' : 'text-neutral'} md:space-y-16 xl:flex-row xl:space-y-0 xl:space-x-40`}>
          <div className="relative  space-y-4  lg:w-fit">
            <div className={`${darkMode && 'opacity-60'}`}>
              <div className={`absolute w-[400px] h-[400px] top-10 blur-3xl left-24 rounded-full ${darkMode ? 'bg-[#6A25C7]' : 'bg-[#C4F7FC]'}`}></div>
              <div className={`absolute w-[400px] bottom-5 left-60 blur-3xl h-[400px] rounded-full ${darkMode ? 'bg-[#F857E7]' : 'bg-[#FEBEFF]'}`}></div>
            </div>
            
            <div className={`z-50 text-sm relative space-y-10 max-w-[700px] ${darkMode ? 'text-white' : 'text-neutral'}`}>
              <p>Fast-forward to today, I am a <span className="font-bold">fresh graduate with a degree</span> in <span className={`${darkMode ? 'text-[#FF74C3]' : 'text-primary'} font-bold`}>Computer Engineering who majored in Software Engineering</span>. I primarily focus on web development, particularly front-end but as mentioned above, I have also done some full-stack projects.</p>

              <p>In terms of work, I am <span className={`font-bold ${darkMode ? 'text-[#FF74C3]' : 'text-primary'}`}>willing to be trained</span> and am open to consistently learn and keep up with the latest in the industry as I am fully aware that this will extend my knowledge further and develop my pre existing skills, which in return would make me a remarkable asset to a company or team and an overall great developer.</p>

              <p><span className="font-bold">I look forward into joining a company that will help me grow</span> and collaborate with a supportive team whom I could also learn from.</p>
            </div>
          </div>

          <div className="space-y-10 relative z-20 w-full max-w-[700px] xl:w-fit">
            <div className="space-y-3 text-md">
              <p><span className={`${darkMode ? 'text-[#FF74C3]' : 'text-primary'} font-bold`}>Name:</span> Raycia Maria Frances R. Navera</p>
              <p><span className={`${darkMode ? 'text-[#FF74C3]' : 'text-primary'} font-bold`}>Birthdate:</span> 04 November 1999</p>
              <p><span className={`${darkMode ? 'text-[#FF74C3]' : 'text-primary'} font-bold`}>Age:</span> {ageAutomatic}</p>
              <p><span className={`${darkMode ? 'text-[#FF74C3]' : 'text-primary'} font-bold`}>Citizenship:</span> US Citizen</p>
              <p><span className={`${darkMode ? 'text-[#FF74C3]' : 'text-primary'} font-bold`}>Location:</span> San Diego, CA, USA</p>
            </div>

            <div onClick={() => handleClickScroll('contact')} className="w-full sm:w-fit">
              <Button>contacts</Button>
            </div>
          </div>
        </div>
      </div>

      <div data-aos='fade-up' data-aos-delay='800' className="container px-5 mx-auto">
        <div className={`relative flex flex-col items-center ${darkMode ? 'text-white' : 'text-neutral'} xl:flex-row xl:justify-center`}>
          <div>
            <div className={`absolute w-[250px] h-[250px] top-40 blur-3xl right-96 rounded-full ${darkMode ? 'bg-[#6A25C7]' : 'bg-[#C4F7FC]'} xl:left-24 xl:right-0 xl:top-10`}></div>
            <div className={`absolute w-[250px] bottom-5 right-60 blur-3xl h-[250px] rounded-full ${darkMode ? 'bg-[#F857E7]' : 'bg-[#FEBEFF]'} xl:left-60 xl:right-0`}></div>
          </div>
          <div className="relative w-full z-20 space-y-5 order-2 mt-6 sm:w-fit xl:order-1 xl:mt-0 xl:mr-[100px]">
            <div tabIndex={0} className={`collapse collapse-arrow duration-300 ${darkMode ? 'bg-black bg-opacity-30' : 'bg-white bg-opacity-30'}`}>   
              <div className="collapse-title text-md font-black flex items-center uppercase space-x-10 hover:cursor-pointer xl:text-lg">
                <div className={`rounded-full bg-primary w-fit px-4 py-2 ${!darkMode && 'text-white'}`}>1</div>
                <div>languages I speak and know</div>    
              </div>
              <div className="collapse-content"> 
                <div className="my-4 flex space-x-5">
                  <Badge version='purple'>English</Badge>
                  <Badge version='pink'>Filipino</Badge>
                </div>
              </div>
            </div>

            <div tabIndex={1} className={`collapse collapse-arrow duration-300 ${darkMode ? 'bg-black bg-opacity-30' : 'bg-white bg-opacity-30'}`}>  
              <div className="collapse-title text-md font-black flex items-center uppercase space-x-10 hover:cursor-pointer xl:text-lg">
                <div className={`rounded-full bg-primary w-fit px-4 py-2 ${!darkMode && 'text-white'}`}>2</div>
                <div>Hobbies I enjoy</div>
              </div>
              <div className="collapse-content flex space-x-5 sm:flex-col sm:space-x-0 sm:-space-y-4"> 
                <div className="space-y-5">
                  <div className="my-4 flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    <Badge version='purple'>Digital Art</Badge>
                    <Badge version='pink'>Cooking</Badge>
                    <Badge version='purple'>Web Designing</Badge>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="my-4 flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    <Badge version='pink'>Listening to music</Badge>
                    <Badge version='purple'>Programming</Badge>
                    <Badge version='pink'>Watching Anime</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div tabIndex={2} className={`collapse collapse-arrow duration-300 ${darkMode ? 'bg-black bg-opacity-30' : 'bg-white bg-opacity-30'}`}> 
              <div className="collapse-title text-md font-black flex items-center uppercase space-x-10 hover:cursor-pointer xl:text-lg">
                <div className={`rounded-full bg-primary w-fit px-4 py-2 ${!darkMode && 'text-white'}`}>3</div>
                <div>Things I'm interested in</div>   
              </div>
              <div className="collapse-content w-full flex space-x-5 sm:flex-col sm:space-x-0 sm:-space-y-4"> 
                <div className="space-y-5 w-full">
                  <div className="my-4 flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    <Badge version='purple'>Food</Badge>
                    <Badge version='pink'>Makeup</Badge>
                    <Badge version='purple'>Minimalism</Badge>
                    <Badge version='pink'>Art</Badge>
                  </div>
                </div>
                <div className="space-y-5 w-full">
                  <div className="my-4 flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5 ">
                    <Badge version='pink'>Anime</Badge>
                    <Badge version='purple'>Kpop</Badge>
                    <Badge version='pink'>Manga</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'text-white' : 'text-neutral'} mt-10 relative text-center flex flex-col  justify-right order-1 xl:order-2 xl:text-right z-20 sm:mt-40 xl:mt-0`}>
            <h2 className='text-3xl uppercase font-black'>other details</h2>
            <p className="text-sm sm:text-lg">These are more stuff about me unrelated to tech</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
