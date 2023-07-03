import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import ThreeBackground from "./components/ThreeBackground";

export const App = () => {
  return (
    <div className="app-container">
      <div className="background-container">
        <ThreeBackground />
      </div>
      <div className="content">
        <Header />
        <Nav />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
