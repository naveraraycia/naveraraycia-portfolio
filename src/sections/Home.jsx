import { useContext, useRef } from "react"
import AppContext from '../context/AppContext'
import Navbar from "../components/layout/Navbar"
import Button from "../components/Button"
// default = Dark mode

function Home() {
  const {darkMode, dispatch} = useContext(AppContext)
  const homeRef = useRef()
  return (
    <div id="home" ref={homeRef} className={`${darkMode === false ? 'light-home' : 'dark-home'}
    font-sans duration-300
    `}>
      <Navbar target={homeRef.current} />
      <div className="flex flex-col px-5 py-10 md:px-32 mt-24 md:flex-row md:space-x-16">

        <div className={`${darkMode === true ? 'text-white' : 'text-neutral'} lg:w-1/2`}>
          <div className="space-y-10">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-xl">I am</h4>
                <h1 className={`font-black text-7xl ${darkMode === true ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary'} lg:text-6xl xl:text-7xl`}>Raycia Navera.</h1>
              </div>
              <p className="text-neutral font-black text-5xl max-w-xl leading-tight lg:text-4xl xl:text-5xl">I bring web ideas to life.</p>
              <p className="leading-loose max-w-xl">An aspiring web developer who finds satisfaction and joy in transforming web ideas into reality through design, code, and implementation.</p>
            </div>
            <Button>get to know me</Button>
          </div>
        </div>

        <div className={`${darkMode === true ? 'bg-[#282834]' : 'bg-white'} hidden duration-300 bg-opacity-50 rounded-lg font-sans mx-auto h-fit pb-10 hover:scale-105 lg:block`}>
          <div className="p-5 w-full bg-neutral rounded-t-lg flex space-x-3">
            <div className="w-[16px] h-[16px] bg-[#FE5757] rounded-full"></div>
            <div className="w-[16px] h-[16px] bg-[#FEC557] rounded-full"></div>
            <div className="w-[16px] h-[16px] bg-[#57FE74] rounded-full"></div>
          </div>

          <div className="m-10 text-white">
            <p>&lt;<span className="text-[#50C3EC]">!DOCTYPE</span> <span className="text-[#B0A7FB]">html</span>&gt;</p>
            <p>&lt;<span className="text-[#50C3EC]">html</span> <span className="text-[#B0A7FB]">lang</span>=<span className="text-[#50C3EC]">"en"</span>&gt;</p>
            <p>&lt;<span className="text-[#50C3EC]">head</span>&gt;</p>
            <p className="ml-4">&lt;<span className="text-[#50C3EC]">meta</span> <span className="text-[#B0A7FB]">charset</span>=<span className="text-[#FF8EB0]">"UTF-8"</span>&gt;</p>
            <p className="ml-4">&lt;<span className="text-[#50C3EC]">title</span>&gt;Personal Website&lt;/<span className="text-[#50C3EC]">title</span>&gt;</p>
            <p>&lt;/<span className="text-[#50C3EC]">head</span>&gt;</p>
            <p>&lt;<span className="text-[#50C3EC]">body</span>&gt;</p>
            <p className="ml-4 max-w-[350px]">&lt;<span className="text-[#50C3EC]">p</span>&gt;Welcome to my portfolio website! Learn more about me here.&lt;/<span className="text-[#50C3EC]">p</span>&gt;</p>
            <p>&lt;/<span className="text-[#50C3EC]">body</span>&gt;</p>
            <p>&lt;/<span className="text-[#50C3EC]">html</span>&gt;</p> 
          </div>
        </div>
      </div>

    <div className={`h-[200px] w-full bg-gradient-to-t ${darkMode === true ? 'from-base-100' : 'from-light-base-100'}`}>
    </div>
    </div>
  )
}

export default Home