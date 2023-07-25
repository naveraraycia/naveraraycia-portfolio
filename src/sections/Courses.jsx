import { useContext } from "react"
import AppContext from "../context/AppContext"
import CourseItem from "../components/CourseItem"
import Slider from "react-slick";
import ReactCertif from '../assets/certificates/React_Front_to_Back_2022.jpg'
import JavaScriptCertif from '../assets/certificates/Modern_JavaScript_from_the_Beginning.jpg'
import TailwindCertif from '../assets/certificates/Tailwind-CSS-From-Scratch.jpg'
import GitCertif from '../assets/certificates/Master_Git_and_GitHub.jpg'
import BootstrapCertif from '../assets/certificates/Bootstrap_4_From_Scratch.jpg'
import MaterializeCertif from '../assets/certificates/MATERIALIZE_CSS_FROM_SCRATCH_WITH_5_PROJECTS.jpg'
import FrontendCertif from '../assets/certificates/Full_Front_End_Web_Development_Course_Oak_Academy.jpg'
import PhpCertif from '../assets/certificates/PHP_for_Beginners_2022_Complete_PHP_MySQL_PDO_Course.jpg'
import NodeCertif from '../assets/certificates/NodeJS_For_Beginners.jpg'
import JestCertif from '../assets/certificates/Zero_to_Hero_in_Jest_Unit_and_Integration_Testing_with_React.jpg'
import AnimationCertif from '../assets/certificates/Level_Up_Your_CSS_Animation_Skills.jpg'
import FigmaCertif from '../assets/certificates/Figma_UI_UX_Design_Essentials.jpg'
import AccentureCertif1 from '../assets/certificates/Accenture-certificate-data-science-software-development_page-0001.jpg'
import AccentureCertif2 from '../assets/certificates/Accenture-certificate-cloud-computing_page-0001.jpg'
import vrCertif from '../assets/certificates/Virtual-reality_page-0001.jpg'


function Courses() {
  const {darkMode} = useContext(AppContext)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section id="courses" className={`${darkMode === true ? 'dark-course text-white' : 'light-course text-neutral'}`}>
      <div className={`h-[200px] w-full bg-gradient-to-b ${darkMode === true ? 'from-base-100' : 'from-light-base-100'}`}></div>
      <div className={`px-5 pt-40 pb-60 md:px-32 space-y-20 h-[800px] duration-300`}>
        <div className="space-y-16">
          <div className="space-y-3 w-full flex flex-col items-center justify-center text-center">
            <h2 className="font-black text-3xl max-w-[450px]">Completed Online Courses & Seminars Attended</h2>
            <p className="max-w-[670px]">Here are the online courses I took to further extend my knowledge in the world of Web Development and Frontend. Presented as well are the seminars I attended in the university that focused on tech.</p>
          </div>

          {/* Slider */}
          <div className="px-5">
            <Slider {...settings}>
              <CourseItem img={ReactCertif} dateCompleted={'Dec 4 2022'} instructor={'Brad Traversy'} number={'01'}  />
              <CourseItem img={JavaScriptCertif} dateCompleted={'Sep 3 2022'} instructor={'Brad Traversy'} number={'02'}  />
              <CourseItem img={TailwindCertif} dateCompleted={'Oct 13 2022'} instructor={'Brad Traversy'} number={'03'}  />
              <CourseItem img={GitCertif} dateCompleted={'Apr 9 2023'} instructor={'Jose Portilla'} number={'04'}  />
              <CourseItem img={BootstrapCertif} dateCompleted={'Oct 22 2022'} instructor={'Brad Traversy'} number={'05'}  />
              <CourseItem img={MaterializeCertif} dateCompleted={'Jul 25 2023'} instructor={'Brad Traversy'} number={'06'}  />
              <CourseItem img={FrontendCertif} dateCompleted={'Jan 16 2022'} instructor={'Oak Academy'} number={'07'}  />
              <CourseItem img={PhpCertif} dateCompleted={'Feb 24 2022'} instructor={'Web Coding'} number={'08'}  />
              <CourseItem img={NodeCertif} dateCompleted={'Jan 22 2022'} instructor={'Oak Academy'} number={'09'}  />
              <CourseItem img={JestCertif} dateCompleted={'Apr 23 2023'} instructor={'Obify Consulting'} number={'10'}  />
              <CourseItem img={AnimationCertif} dateCompleted={'Jun 3 2022'} instructor={'Donovan Hutchinson'} number={'11'}  />
              <CourseItem img={FigmaCertif} dateCompleted={'Apr 1 2022'} instructor={'Daniel Walter Scott'} number={'12'}  />
              <CourseItem img={AccentureCertif1} dateCompleted={'Apr 22 2022'} instructor={'Accenture'} number={'13'}  />
              <CourseItem img={AccentureCertif2} dateCompleted={'May 20 2022'} instructor={'Accenture'} number={'14'}  />
              <CourseItem img={vrCertif} dateCompleted={'May 11 2022'} instructor={'Jan Yolec Homecillo'} number={'15'}  />

            </Slider>

          </div>
        </div>

      </div>

      <div className={`h-[200px] w-full bg-gradient-to-t ${darkMode === true ? 'from-base-100' : 'from-light-base-100'}`}></div>
    </section>
  )
}

export default Courses