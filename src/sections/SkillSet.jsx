import { useContext } from "react"
import AppContext from "../context/AppContext"
import Heading from "../components/Heading"
import Card from "../components/Card"
import {FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaGitAlt, FaBootstrap, FaPython, FaSass} from "react-icons/fa"
import { BiLogoFirebase, BiLogoTailwindCss, BiLogoRedux } from "react-icons/bi";
import { DiMaterializecss } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiPhp, SiSelenium } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";


function SkillSet() {
  const {darkMode} = useContext(AppContext)

  return (
    <section id="skillSet" className={`duration-300 ${darkMode ? 'dark-skill-set' : 'light-skill-set'}`}>
      <div data-aos='fade-up' data-aos-delay='200' className="container mx-auto px-5 pt-10 space-y-32 mb-28 xl:pt-40">
        <div className="space-y-10">
          <div className="space-y-3">
            <Heading version='purple' number='02' title='Skill Set.' />
            <p className={`${darkMode ? 'text-white' : 'text-neutral'} max-w-xl text-sm sm:text-lg`}>Presented below are the technologies, frameworks, languages, and tools that I primarily focus on and am working with recently.</p>
          </div>

          <div className="grid gap-6 justify-items-center grid-rows-4 grid-cols-2 xs:grid-rows-3 md:grid-rows-2 lg:grid-cols-4 xl:grid-cols-6">
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <FaHtml5 size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>HTML5</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <FaCss3Alt size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>CSS3</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <FaJs size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Javascript</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <FaReact size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>React JS</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <BiLogoRedux size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Redux</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <BiLogoFirebase size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Firebase</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <BiLogoTailwindCss size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Tailwind CSS</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <FaBootstrap size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Bootstrap 4</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <DiMaterializecss size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Materialize CSS</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <FiFigma size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Figma</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <FaGitAlt size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Git</h5>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card>
                <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                  <FaSass size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                  <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>SASS</h5>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-delay='400' className="space-y-10 w-full flex flex-col text-center justify-center items-center">
          <div className={`space-y-2 ${darkMode ? 'text-white' : 'text-neutral'}`}>
            <h1 className="font-black uppercase text-4xl">other</h1>
            <p className="text-sm max-w-lg sm:text-lg">These are technologies I’ve previously worked with and learned from the university.</p>
          </div>

          <div className="space-y-6 w-full">
            <div className="w-full">
              <div className="grid gap-6 justify-items-center grid-rows-4 grid-cols-2 xs:grid-rows-3 md:grid-rows-2 lg:grid-cols-4 xl:grid-cols-6">
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <FaPython size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Python</h5>
                  </div>
                </Card>
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <SiPhp size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Php</h5>
                  </div>
                </Card>
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <BsFiletypeSql size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Sql</h5>
                  </div>
                </Card>
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <FaJava size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Java</h5>
                  </div>
                </Card>
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <SiSelenium size={40} className={`${darkMode ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Selenium</h5>
                  </div>
                </Card>
                <Card>
                  <div className='uppercase flex font-black flex-col justify-center items-center'>
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Linux Shell Script</h5>
                  </div>
                </Card>
                <Card>
                  <div className='uppercase flex font-black flex-col justify-center items-center'>
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>VHDL</h5>
                  </div>
                </Card>
                <Card>
                  <div className='uppercase flex font-black flex-col justify-center items-center'>
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Visual Basic</h5>
                  </div>
                </Card>
                <Card>
                  <div className='uppercase flex font-black flex-col justify-center items-center'>
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>C++</h5>
                  </div>
                </Card>
                <Card>
                  <div className='uppercase flex font-black flex-col justify-center items-center'>
                    <h5 className={`text-sm text-center ${darkMode ? 'text-white' : 'text-neutral'} sm:text-lg`}>Android Studio</h5>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`h-[200px] w-full bg-gradient-to-t ${darkMode ? 'from-base-100' : 'from-light-base-100'}`}></div>
    </section>
  )
}

export default SkillSet