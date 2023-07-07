import React from "react";
import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="item">Contact Me</h2>

      <div className="container contact_container item">
        <div className="contact_options">
          <article className="contact_option">
            <h4>
              Email <TfiEmail />
            </h4>
            <a href="mailto:aluux999@gmail.com">
              <h5>aluux999@gmail.com</h5>
            </a>
            <hr />
            <h4>
              LinkedIn <BsLinkedin />
            </h4>
            <a
              href="https://www.linkedin.com/in/alexliang1/"
              target="_blank"
              rel="noreferrer"
            >
              <h5>Contact me on LinkedIn</h5>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
