import { useContext } from "react"
import AppContext from "../context/AppContext"
import Heading from "../components/Heading"
import Card from "../components/Card"
import {FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaGitAlt, FaBootstrap, FaPython} from "react-icons/fa"
import { BiLogoFirebase, BiLogoTailwindCss } from "react-icons/bi";
import { DiMaterializecss } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiPhp, SiSelenium } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import Badge from "../components/Badge"


function SkillSet() {
  const {darkMode} = useContext(AppContext)
  return (
    <section id="skillSet" className={`duration-300 ${darkMode === true ? 'dark-skill-set' : 'light-skill-set'}`}>
      <div className="px-5 pt-24 space-y-32 mb-28 md:px-32">
        <div className="space-y-10">
          <div className="space-y-3">
            <Heading version='purple' number='02' title='Skill Set.' />
            <p className={`${darkMode === true ? 'text-white' : 'text-neutral'} max-w-xl`}>Presented below are the technologies, frameworks, languages, and tools that I primarily focus on and am working with recently.</p>
          </div>

          <div className="grid gap-6 justify-items-center grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 xl:grid-cols-5 xl:grid-rows-2">
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <FaHtml5 size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">HTML5</h5>
              </div>
            </Card>
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <FaCss3Alt size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">CSS3</h5>
              </div>
            </Card>
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <FaJs size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">Javascript</h5>
              </div>
            </Card>
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <FaReact size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">React JS</h5>
              </div>
            </Card>
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <FaGitAlt size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">Git</h5>
              </div>
            </Card>

            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <BiLogoFirebase size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">Firebase</h5>
              </div>
            </Card>
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <BiLogoTailwindCss size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">Tailwind CSS</h5>
              </div>
            </Card>
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <FaBootstrap size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">Bootstrap 4</h5>
              </div>
            </Card>
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <DiMaterializecss size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">Materialize CSS</h5>
              </div>
            </Card>
            <Card>
              <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                <FiFigma size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                <h5 className="text-lg text-center">Figma</h5>
              </div>
            </Card>
          </div>


        </div>

        <div className="space-y-10 w-full flex flex-col text-center justify-center items-center">
          <div className={`space-y-2 ${darkMode === true ? 'text-white' : 'text-neutral'}`}>
            <h1 className="font-black uppercase text-4xl">other</h1>
            <p className="max-w-lg">These are technologies I’ve previously worked with and learned from the university.</p>
          </div>

          <div className="space-y-6 w-full">
            <div className="w-full">
              <div className="grid gap-6 justify-items-center grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 xl:grid-cols-5 xl:grid-rows-1">
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <FaPython size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className="text-lg text-center">Python</h5>
                  </div>
                </Card>
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <SiPhp size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className="text-lg text-center">Php</h5>
                  </div>
                </Card>
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <BsFiletypeSql size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className="text-lg text-center">Sql</h5>
                  </div>
                </Card>
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <FaJava size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className="text-lg text-center">Java</h5>
                  </div>
                </Card>
                <Card>
                  <div className='space-y-2 uppercase flex font-black flex-col justify-center items-center text-neutral'>
                    <SiSelenium size={50} className={`${darkMode === true ? 'text-secondary' : 'text-primary'}`} />
                    <h5 className="text-lg text-center">Selenium</h5>
                  </div>
                </Card>
              </div>
            </div>

            <div className="w-full">
              <div className="grid gap-6 justify-items-center grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 xl:grid-cols-5 xl:grid-rows-1">
                <Badge outline={true}>Linux Shell Script</Badge>
                <Badge outline={true}>VHDL</Badge>
                <Badge outline={true}>Visual Basic</Badge>
                <Badge outline={true}>C++</Badge>
                <Badge outline={true}>Android Studio</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`h-[200px] w-full bg-gradient-to-t ${darkMode === true ? 'from-base-100' : 'from-light-base-100'}`}></div>
    </section>
  )
}

export default SkillSet