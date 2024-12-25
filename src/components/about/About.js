import React from "react";
import './about.css'
import Me from "../../assests/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5> Know About Me</h5>
      <h2> About Me</h2>
      <br></br>
      <br></br>
      <div className="container about_container">

        {/* it is used for the one container among the continaer for the image */}
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt=""></img>
          </div>
        </div>


        {/* it was the second continer among the among the contianer for the whole paragraph and card section*/}

        <div className="about__content">
          {/* this is for the card container */}
          <div className="about__cards">
            
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>CLinets</h5>
              <small>300 clints worldwide</small>
            </article>


            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>80+ projects</small>
            </article>

          </div>


          {/* this is for the paragraph container */}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>

      </div>
      
    </section>
  );
};

export default About;
