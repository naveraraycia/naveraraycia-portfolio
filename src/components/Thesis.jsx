import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { thesis } from '../projectDetails/projectInformation'
import Slider from "react-slick";

function Thesis() {
  const {darkMode} = useContext(AppContext)
  const [readMoreThesis, setReadMoreThesis] = useState(false)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="space-y-24 duration-300">
      <div className="px-5">
        <Slider {...settings}>
          {thesis.imgs.map((img, index)=> (
            <img key={index} src={img} alt="Thesis Screenshots" className="object-cover max-w-[800px]" />
          ))}
        </Slider>
      </div>

      <div className="space-y-5">
        <h2 className={`${darkMode ? 'text-secondary' : 'text-primary'} font-extrabold text-2xl sm:text-3xl`}>{thesis.title}</h2>

        <p className={`${darkMode ? 'text-white' : 'text-neutral'} text-sm`}>{thesis.descriptions[0]}</p>

    
        {!readMoreThesis ? (
          <p onClick={() => setReadMoreThesis(true)} className={`font-semibold text-sm inline-block ${darkMode ? 'text-[#50C3EC]' : 'text-secondary'} hover:underline hover:cursor-pointer`}>Read more about my undergrad thesis</p>
        ) : (
          <>
            <p className={`${darkMode ? 'text-white' : 'text-neutral'} text-sm`}>{thesis.descriptions[1]}</p>

            <p className={`${darkMode ? 'text-white' : 'text-neutral'} text-sm`}>{thesis.descriptions[2]}</p>
          
            <p onClick={() => setReadMoreThesis(false)} className={`font-semibold text-sm inline-block ${darkMode ? 'text-[#50C3EC]' : 'text-secondary'} hover:underline hover:cursor-pointer`}>Show less</p>
          </>
        )}

        <div className="space-y-3">
          <h3 className={`font-extrabold text-lg sm:text-xl ${darkMode ? 'text-white' : 'text-neutral'}`}>{thesis.subHeading1.title}</h3>
          <p className={`${darkMode ? 'text-white' : 'text-neutral'} text-sm`}>{thesis.subHeading1.description}</p>
        </div>

        <div className="space-y-3">
          <h3 className={`font-extrabold text-lg sm:text-xl ${darkMode ? 'text-white' : 'text-neutral'}`}>{thesis.subHeading2.title}</h3>
          <p className={`${darkMode ? 'text-white' : 'text-neutral'} text-sm`}>{thesis.subHeading2.description}</p>
        </div>

        <ul className={`flex flex-wrap text-xs sm:text-sm font-semibold ${darkMode ? 'text-[#61A1FF]' : 'text-primary'}`}>
          {thesis.stack.map((stackItem, index) => (
            <li key={index} className="mr-5">{stackItem}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Thesis