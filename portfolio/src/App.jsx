import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutMe from "./pages/aboutme";
import MySkills from "./pages/Myskills";
import Projects from "./pages/project";
import Contact from "./pages/contact";
import HeroSection from "./pages/Herosection"; // Assuming this is your Home page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
