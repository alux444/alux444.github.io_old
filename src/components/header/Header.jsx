import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../img/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hey, I'm</h5>
        <h1>Alex Liang</h1>
        <h5 className="text-light">Software Engineering Student</h5>
        <h5 className="text-light">at the University of Auckland</h5>
        <CTA></CTA>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
