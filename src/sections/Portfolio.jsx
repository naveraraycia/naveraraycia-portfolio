import { useContext, useState } from "react"
import { personalProject, internship } from "../projectDetails/projectInformation"
import AppContext from "../context/AppContext"
import Heading from "../components/Heading"
import ProjectItem from "../components/ProjectItem"
import Button from "../components/Button"
import Thesis from '../components/Thesis'


function Portfolio() {
  const {darkMode} = useContext(AppContext)
  const [clicked, setClicked] = useState(1)
  const toShow = 4
  const [next, setNext] = useState(toShow)
  const handleLoadMore = () => {
    setNext(next + toShow)
  }

  const handleShowLess = () => {
    setNext(next - toShow)
  }

  return (
    <section id="portfolio" className={`px-5 pt-5 pb-32 space-y-5 sm:space-y-10 sm:py-40 md:px-32 ${darkMode ? 'bg-base-100' : 'bg-light-base-100'} duration-300`}>
      <div data-aos='fade-up' data-aos-delay='200' className="space-y-5">
        <Heading version={'purple'} number={'04'} title={'Portfolio.'} isCentered={true} />
        <div className="tabs justify-center items-center">
          <a onClick={()=> setClicked(1)} className={`tab tab-xs tab-bordered border-b-4 duration-300 font-semibold sm:tab-sm md:tab-lg ${darkMode && clicked !== 1 ? 'border-secondary text-secondary border-opacity-50 text-opacity-50' : darkMode && clicked === 1 ? 'border-opacity-100 text-opacity-100 border-secondary text-secondary' : !darkMode && clicked === 1 ? 'border-opacity-100 text-opacity-100 border-primary text-primary' : 'border-primary text-primary border-opacity-50 text-opacity-50'}`}>Personal Projects</a> 

          <a onClick={()=> setClicked(2)} className={`tab tab-xs tab-bordered border-b-4 duration-300 font-semibold sm:tab-sm md:tab-lg ${darkMode && clicked !== 2 ? 'border-secondary text-secondary border-opacity-50 text-opacity-50' : darkMode && clicked === 2 ? 'border-opacity-100 text-opacity-100 border-secondary text-secondary' : !darkMode && clicked === 2 ? 'border-opacity-100 text-opacity-100 border-primary text-primary' : 'border-primary text-primary border-opacity-50 text-opacity-50'}`}>Internship</a> 

          <a onClick={()=> setClicked(3)} className={`tab tab-xs tab-bordered border-b-4 duration-300 font-semibold sm:tab-sm md:tab-lg ${darkMode && clicked !== 3 ? 'border-secondary text-secondary border-opacity-50 text-opacity-50' : darkMode && clicked === 3 ? 'border-opacity-100 text-opacity-100 border-secondary text-secondary' : !darkMode && clicked === 3 ? 'border-opacity-100 text-opacity-100 border-primary text-primary' : 'border-primary text-primary border-opacity-50 text-opacity-50'}`}>Thesis</a>
        </div>
      </div>

      <div data-aos='fade-up' data-aos-delay='400' className="w-full">
        {clicked === 1 ? (
          <div className="w-full duration-300 space-y-10 flex flex-col items-center justify-center sm:space-y-20">
            <div className='space-y-10 w-full flex flex-col justify-center items-center lg:space-y-20'>
              {personalProject.slice(0, next)?.map((projectItem, index) => (
                <ProjectItem key={index} title={projectItem.title} isViewDarkColor={projectItem.darkView} figma={projectItem.figma} url={projectItem.url} description={projectItem.description} img={projectItem.img} stack={projectItem.stack} />
              ))}
            </div>

            {next < personalProject.length ? (
              <div className="w-fit" onClick={handleLoadMore}>
                <Button version={'outlined'}>Load More</Button>
              </div>
            ) : (
              <div className="w-fit" onClick={handleShowLess}>
                <Button version={'outlined'}>Show Less</Button>
              </div>
            )}
          </div>
        ) : clicked === 2 ? 
          <ProjectItem title={internship.title} badge={internship.badge} isViewDarkColor={internship.darkView} figma={internship.figma} url={internship.url} description={internship.description} img={internship.img} stack={internship.stack} />
        : 
        <Thesis />}
      </div>
    </section>
  )
}

export default Portfolio