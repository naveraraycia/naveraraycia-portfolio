import { useContext } from "react"
import AppContext from "../context/AppContext"
import Button from "./Button"

function ContactForm() {
  const {darkMode} = useContext(AppContext)

  return (
    <form className="space-y-5">
      <input type="text" placeholder="Subject" className={`input input-bordered bg-transparent border-2 ${darkMode? 'input-secondary' : 'input-primary'} w-full lg:max-w-[500px]`} />
    
      <textarea className={`textarea bg-transparent border-2 w-full h-[300px] max-h-[400px] ${darkMode ? 'textarea-secondary' : 'textarea-primary'} lg:max-w-[500px]`} placeholder="Message"></textarea>

      <div className="w-full">
        <a href={`mailto:naveraraycia@outlook.com?Subject=Test subject&body=Test body`}>
       <Button isBlock={true}>Send</Button>
      </a>
      </div>
    </form>
  )
}

export default ContactForm