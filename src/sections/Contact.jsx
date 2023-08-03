import { useContext } from "react"
import AppContext from "../context/AppContext"
import Heading from "../components/Heading"
import ContactForm from "../components/ContactForm";
import { MdEmail } from "react-icons/md";

function Contact() {
  const {darkMode} = useContext(AppContext)
  
  return (
    <section id="contact" className={`${darkMode ? 'text-white bg-base-100' : 'bg-light-base-100 text-neutral'} duration-300`}>
      <div data-aos='fade-up' data-aos-delay='400' className={`px-5 pb-10 md:px-32 space-y-20 duration-300`}>
        <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-20 ">
          <div className="space-y-5 md:space-y-10">
            <Heading version={'purple'} number={'05'} title={'Contact Me.'} />

            <p className="text-sm sm:text-lg lg:max-w-[650px]">Get in touch with me through the contact information below. I am <span className={`font-bold ${darkMode ? 'text-secondary': 'text-primary'}`}>currently looking forward for a fun yet challenging job opportunity</span> that would allow me to utilize my skills in web development  to help solve real-life problems in the industry and provide solutions, as well as meet supportive like-minded people.</p>

            <div className="space-y-5">
              <div className="flex items-center space-x-5">
                <p className={`font-black text-xl ${darkMode ? 'text-secondary' : 'text-primary'}`}>Email me here</p>
              </div>

              <div className="flex items-center space-x-5">
                <MdEmail size={30} className={`${darkMode? 'text-secondary' : 'text-primary'}`} />
                <span className="semibold sm:text-xl">naveraraycia@outlook.com</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-fit">
            <ContactForm />
          </div>
        </div>
      </div>
      </section>
  )
}

export default Contact