import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'

export const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
