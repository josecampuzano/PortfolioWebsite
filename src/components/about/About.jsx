import React from "react";
import "./about.css";
import memoji2 from "../../assets/memoji2.png";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={memoji2} alt="About Image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3200 + clients </small>
            </article> */}

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>Couple in progress</small>
            </article>
          </div>

          <p>
            Full-Stack software engineer proficient in using JavaScript for
            front-end and back-end programming, React, HTML, CSS, API
            implementing, Node.JS, Express, PostgreSQL, and frameworks like
            Bootstrap. My experience in leadership provides an advantage in finding
            solutions to problems using a collaborative approach and embraces
            user-experience perspective.
          </p>
          <div className="place">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
