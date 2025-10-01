import React from "react";
import "./intro.css";
import photo from "../../assets/face2.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <p className="hello">Hello, </p>
        <p className="introText">
          I'm <span className="introName">Shivya</span>{" "}
        </p>
        <p className="introParagraph1">
          A third-year <b>software engineering</b> student at McMaster
          University!
        </p>

        <p className="introParagraph2">
          I am a passionate software developer with proven experience building
          scalable full-stack applications and AI-powered solutions. Through my
          internships at RBC, I've enhanced developer productivity for 6,000+
          engineers and built enterprise-grade systems using modern technologies
          like React, Node.js, Python, and AWS. I aim to leverage my expertise
          in software engineering and AI to drive innovation and solve complex
          problems in dynamic, fast-paced environments. Bilingual in French and
          English, I possess strong communication skills, analytical
          problem-solving abilities, and the technical expertise to tackle any
          challenge.
        </p>
        <a href="ShivyaMehtaResume.pdf" download="ShivyaMehtaResume.pdf">
          <button id="cv-button" className="cv-button">
            Download CV
          </button>
        </a>
      </div>

      <img src={photo} alt="profile" className="photo" download />
    </section>
  );
};

export default Intro;
