import { useContext, useState } from "react"
import AppContext from "../context/AppContext"
import Button from "./Button"

function ContactForm() {
  const {darkMode} = useContext(AppContext)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <form className="space-y-5">
      <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} value={subject} className={`input text-sm input-bordered bg-transparent border-2 ${darkMode ? 'input-secondary' : 'input-primary'} w-full sm:text-lg lg:max-w-[500px]`} />
    
      <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`textarea bg-transparent border-2 w-full h-[300px] max-h-[400px] ${darkMode ? 'textarea-secondary' : 'textarea-primary'} sm:text-lg lg:max-w-[500px]`} placeholder="Message"></textarea>

      <div className="w-full lg:max-w-[500px]">
        <a href={`mailto:naveraraycia@outlook.com?Subject=${subject}&body=${message}`}>
          <Button isBlock={true}>Send</Button>
        </a>
      </div>
    </form>
  )
}

export default ContactForm