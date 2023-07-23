import { useContext } from "react"
import AppContext from "../context/AppContext"
function Window({version, children}) {
  const {darkMode} = useContext(AppContext)
  return (
    <div className={`rounded-lg pb-5 ${darkMode === true && version === 'purple' ? 'bg-[#24142C]' : darkMode === true && version === 'blue' ? 'bg-[#151F35]' : 'bg-white'}`}>
      <div className={`${version === 'purple' ? 'bg-neutral' : version === 'green' ? 'bg-[#174C49]' : 'bg-[#17274C]'} h-[50px] w-full rounded-t-lg p-5`}>
        <div className="flex space-x-3">
          <div className="bg-[#FE5757] h-[15px] w-[15px] rounded-full"></div>
          <div className="bg-[#FEC557] h-[15px] w-[15px] rounded-full"></div>
          <div className="bg-[#57FE74] h-[15px] w-[15px] rounded-full"></div>
        </div>
      </div>
      <div className="mt-5 mx-5">
        {children}
      </div>
    </div>
  )
}

export default Window