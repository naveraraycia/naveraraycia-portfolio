import { useContext, useEffect } from "react"
import AppContext from '../context/AppContext'
import Navbar from "../components/layout/Navbar"
import Button from "../components/Button"
import AOS from "aos"
import 'aos/dist/aos.css'

function Home() {
  const {darkMode} = useContext(AppContext)

  function handleClickScroll(idName){
    const sectionToScroll = document.getElementById(`${idName}`)
    sectionToScroll.scrollIntoView({behavior: 'smooth'})
  }

  useEffect(()=>{
    AOS.init({
      once: true
    })
  },[])
  
  return (
    <section id="home" className={`${!darkMode ? 'light-home' : 'dark-home'} font-sans duration-300`}>
      <Navbar />
      <div className="flex flex-col px-5 py-10 md:px-32 md:flex-row md:space-x-16">
        <div className={`${darkMode ? 'text-white' : 'text-neutral'} lg:w-1/2`}>
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="md:space-y-3 xl:-space-y-1">
                <div className="-space-y-1 sm:-space-y-2 lg:space-y-0 xl:-space-y-5">
                  <h4 data-aos='fade-right' data-aos-delay='500' className="font-semibold text-lg sm:text-xl">I am</h4>
                  <div data-aos='fade-right' data-aos-delay='700'>
                    <h1 className={`font-black text-5xl ${darkMode ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary'} sm:leading-none sm:text-6xl lg:leading-none xl:text-7xl xl:leading-normal`}>Raycia Navera.</h1>
                  </div>
                </div>
                <p data-aos='fade-right' data-aos-delay='900' className="text-neutral font-black text-4xl max-w-xl leading-tight sm:text-5xl lg:text-4xl xl:text-5xl">I bring web ideas to life.</p>
              </div>

              <p data-aos='fade-right' data-aos-delay='1100' className="leading-loose text-sm max-w-xl sm:text-lg">An aspiring web developer who finds satisfaction and joy in transforming web ideas into reality through design, code, and implementation.</p>
            </div>
            
            <div data-aos='fade-right' data-aos-delay='1300' onClick={() => handleClickScroll('about')} className="w-fit">
              <Button>get to know me</Button>
            </div>
          </div>
        </div>

        <div data-aos='fade-left' data-aos-delay='1500'>
          <div className={`${darkMode ? 'bg-[#282834]' : 'bg-white'} hidden duration-300 bg-opacity-50 rounded-lg font-sans mx-auto h-fit pb-10 hover:scale-105 lg:block`}>
            <div className="p-5 w-full bg-neutral rounded-t-lg flex space-x-3">
              <div className="w-[16px] h-[16px] bg-[#FE5757] rounded-full"></div>
              <div className="w-[16px] h-[16px] bg-[#FEC557] rounded-full"></div>
              <div className="w-[16px] h-[16px] bg-[#57FE74] rounded-full"></div>
            </div>

            <div className={`m-10 ${darkMode ? 'text-white' : 'text-neutral'}`}>
              <p>&lt;!<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>DOCTYPE</span> <span className={`${darkMode ? 'text-[#B0A7FB]' : 'text-[#6558CE]'}`}>html</span>&gt;</p>
              <p>&lt;<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>html</span> <span className={`${darkMode ? 'text-[#B0A7FB]' : 'text-[#6558CE]'}`}>lang</span>=<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-neutral'}`}>"en"</span>&gt;</p>
              <p>&lt;<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>head</span>&gt;</p>
              <p className="ml-4">&lt;<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>meta</span> <span className={`${darkMode ? 'text-[#B0A7FB]' : 'text-[#6558CE]'}`}>charset</span>=<span className={`${darkMode ? 'text-[#FF8EB0]' : 'text-[#F43D74]'}`}>"utf-8"</span>&gt;</p>
              <p className="ml-4">&lt;<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>title</span>&gt;Personal Website&lt;/<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>title</span>&gt;</p>
              <p>&lt;/<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>head</span>&gt;</p>
              <p>&lt;<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>body</span>&gt;</p>
              <p className="ml-4 max-w-[350px]">&lt;<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>p</span>&gt;Welcome to my portfolio website! Learn more about me here.&lt;/<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>p</span>&gt;</p>
              <p>&lt;/<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>body</span>&gt;</p>
              <p>&lt;/<span className={`${darkMode ? 'text-[#50C3EC]' : 'text-[#068B33]'}`}>html</span>&gt;</p> 
            </div>
          </div>
        </div>
      </div>

    <div className={`h-[200px] w-full bg-gradient-to-t ${darkMode ? 'from-base-100' : 'from-light-base-100'}`}>
    </div>
    </section>
  )
}

export default Home