import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Skill from './components/skills/skill.jsx'
import Project from './components/projects/project.jsx'
import Leetcode from './components/leetcode/leetcode.jsx'
import Badges from './components/badges/badges.jsx'
import Education from './components/education/education.jsx'
import Contact from './components/contact/contact.jsx'
import Certificate from './components/certificates/certificate.jsx'
function App() {
  

  return (
   <>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Leetcode/>
      <Badges/>
      <Certificate/>
      <Education/>
      <Contact/>
      
      
   </>
  )
}

export default App
