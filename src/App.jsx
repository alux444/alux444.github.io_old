import React, { useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import ThreeBackground from "./components/ThreeBackground";

export const App = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((items) => {
            items.forEach((item) => {
                console.log(item);
                if (item.isIntersecting) {
                    item.target.classList.add("show");
                } else {
                    item.target.classList.remove("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".item");
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

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
