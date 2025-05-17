import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Skill from './components/skills/skill'
import Project from './components/projects/project'
import Leetcode from './components/leetcode/leetcode'
import Badges from './components/badges/badges'
import Education from './components/education/education'
import Contact from './components/contact/contact'
function App() {
  

  return (
   <>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Leetcode/>
      <Badges/>
      <Education/>
      <Contact/>
      
   </>
  )
}

export default App
