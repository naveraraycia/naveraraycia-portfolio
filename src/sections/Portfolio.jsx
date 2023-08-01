import { useContext, useState } from "react"
import AppContext from "../context/AppContext"
import Heading from "../components/Heading"
import ProjectItem from "../components/ProjectItem"
import Button from "../components/Button"


function Portfolio() {
  const {darkMode} = useContext(AppContext)
  const [clicked, setClicked] = useState(1)

  return (
    <section id="portfolio" className={`px-5 py-40 md:px-32 space-y-32 ${darkMode === true ? 'bg-base-100' : 'bg-light-base-100'} duration-300`}>

      <div className="space-y-10">
        <Heading version={'purple'} number={'04'} title={'Portfolio.'} isCentered={true} />

        <div className="tabs justify-center items-center">

          <a onClick={()=> setClicked(1)} className={`tab tab-sm tab-bordered border-b-4 duration-300 font-semibold md:tab-lg ${darkMode && clicked !== 1 ? 'border-secondary text-secondary border-opacity-50 text-opacity-50' : darkMode && clicked === 1 ? 'border-opacity-100 text-opacity-100 border-secondary text-secondary' : !darkMode && clicked === 1 ? 'border-opacity-100 text-opacity-100 border-primary text-primary' : 'border-primary text-primary border-opacity-50 text-opacity-50'}`}>Personal Projects</a> 

          <a onClick={()=> setClicked(2)} className={`tab tab-sm tab-bordered border-b-4 duration-300 font-semibold md:tab-lg ${darkMode && clicked !== 2 ? 'border-secondary text-secondary border-opacity-50 text-opacity-50' : darkMode && clicked === 2 ? 'border-opacity-100 text-opacity-100 border-secondary text-secondary' : !darkMode && clicked === 2 ? 'border-opacity-100 text-opacity-100 border-primary text-primary' : 'border-primary text-primary border-opacity-50 text-opacity-50'}`}>Internship</a> 

          <a onClick={()=> setClicked(3)} className={`tab tab-sm tab-bordered border-b-4 duration-300 font-semibold md:tab-lg ${darkMode && clicked !== 3 ? 'border-secondary text-secondary border-opacity-50 text-opacity-50' : darkMode && clicked === 3 ? 'border-opacity-100 text-opacity-100 border-secondary text-secondary' : !darkMode && clicked === 3 ? 'border-opacity-100 text-opacity-100 border-primary text-primary' : 'border-primary text-primary border-opacity-50 text-opacity-50'}`}>Undergrad Thesis</a>
        </div>

      </div>


      <div className="space-y-20 w-full flex flex-col items-center justify-center">
        <div className='space-y-10 w-full flex flex-col justify-center items-center'>
          <ProjectItem />
          <ProjectItem />
        </div>

        <div className="w-fit">
          <Button version={'outlined'}>Load More</Button>
        </div>
      </div>

    </section>
  )
}

export default Portfolio