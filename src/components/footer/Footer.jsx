import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="line" />
      <ul className="permalinks">
        <li>
          <a href="#">Top</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <a
        className="footer-copyright"
        href="https://github.com/alux444/"
        rel="noreferrer"
        target="_blank"
      >
        2023 &copy; alux444
      </a>
    </footer>
  );
};

export default Footer;
