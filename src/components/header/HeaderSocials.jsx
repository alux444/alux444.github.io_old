import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/alex-liang-7b25a6269/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin style={{ fontSize: "3rem" }} />
      </a>
      <a href="https://github.com/alux444" rel="noreferrer" target="_blank">
        <AiFillGithub style={{ fontSize: "3rem" }} />
      </a>
      <a href="mailto:aluux999@gmail.com" rel="noreferrer" target="_blank">
        <TfiEmail style={{ fontSize: "3rem" }} />
      </a>
    </div>
  );
};

export default HeaderSocials;
