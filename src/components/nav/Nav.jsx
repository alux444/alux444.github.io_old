import React, { useEffect } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const aboutSection = document.getElementById("about");
        const projectsSection = document.getElementById("projects");
        const contactSection = document.getElementById("contact");

        if (scrollY < aboutSection.offsetTop) {
            setActiveNav("#");
        } else if (scrollY < projectsSection.offsetTop) {
            setActiveNav("#about");
        } else if (scrollY < contactSection.offsetTop) {
            setActiveNav("#projects");
        } else {
            setActiveNav("#contact");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>

            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>

            <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={activeNav === "#projects" ? "active" : ""}
            >
                <AiOutlineGithub />
            </a>

            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <BiMessageDetail />
            </a>
        </nav>
    );
};

export default Nav;
