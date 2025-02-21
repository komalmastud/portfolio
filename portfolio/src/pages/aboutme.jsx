import React from "react";
import "./AboutMe.css";
import myImage from "../assets/aboutme.jpeg"; // Ensure the correct path

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img src={myImage} alt="Komal Mastud" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi, I'm <strong>Komal Rajendra Mastud</strong>, a passionate{" "}
            <strong>Full Stack Developer</strong> who enjoys building web
            applications. I hold a <strong>Bachelor’s degree</strong> from{" "}
            <strong>Dr. D.Y. Patil Institute, Pimpri</strong>
            and I'm currently pursuing my{" "}
            <strong>Master of Computer Science (MCS)</strong> at
            <strong> Savitribai Phule Pune University</strong>.
          </p>
          <p>
            I have trained as a <strong>Full Stack Developer</strong> at{" "}
            <strong>MMEAC</strong>, gaining expertise in{" "}
            <strong>
              React.js, Node.js, MongoDB, Express.js, and JavaScript
            </strong>
            . Additionally, I completed <strong>AWS DevOps</strong> training,
            covering{" "}
            <strong>
              CI/CD pipelines, Docker, Kubernetes, and cloud deployment
            </strong>
            .
          </p>
          <p>
            I am eager to create{" "}
            <strong>fast, secure, and user-friendly applications</strong>. My
            goal is to leverage my <strong>front-end and back-end</strong>{" "}
            skills to contribute to innovative projects and continue learning
            new technologies.
          </p>

          {/* Contact Button */}
          <a href="/contact" className="contact-btn">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
