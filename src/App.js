import Home from "./sections/Home";
import About from "./sections/About";
import FixedLinks from "./components/FixedLinks";
import SkillSet from "./sections/SkillSet";
import Education from "./sections/Education";
import Courses from "./sections/Courses";

function App() {
  return (
    <>
    <FixedLinks />
    <Home />
    <About />
    <SkillSet />
    <Education />
    <Courses />
    </>
  );
}

export default App;
