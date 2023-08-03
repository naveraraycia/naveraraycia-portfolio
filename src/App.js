import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext, useEffect  } from "react";
import AppContext from "./context/AppContext";
import Home from "./sections/Home";
import About from "./sections/About";
import FixedLinks from "./components/FixedLinks";
import SkillSet from "./sections/SkillSet";
import Education from "./sections/Education";
import Courses from "./sections/Courses";
import Portfolio from './sections/Portfolio'
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import Spinner from "./components/Spinner";

function App() {
  const {loading, dispatch} = useContext(AppContext)

  // useEffect(()=>{
  //   dispatch({type: 'SET_LOADING'})
  //   setTimeout(()=>{
  //     dispatch({type: 'REMOVE_LOADING'})
  //   },1500)
  // }, [dispatch])

  if(loading){
    return <Spinner />
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={(
            <>   
              <FixedLinks />
              <Home />
              <About />
              <SkillSet />
              <Education />
              <Courses />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          )} />
  
          <Route path="/*" element={<NotFound />} />
  
        </Routes>
      </Router> 
    );
  }
}

export default App;
