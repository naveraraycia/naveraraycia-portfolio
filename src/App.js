import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
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
    </>
    
  );
}

export default App;
