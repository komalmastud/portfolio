import "./Myskills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

const MySkills = () => {
  return (
    <section className="skills-section">
      <h1 className="section-title">My Skills</h1>
      <div className="skills-container">
        {/* Frontend */}
        <div className="skill-category">
          <h2>Frontend</h2>
          <div className="skills-list">
            <div className="skill">
              <FaHtml5 /> HTML
            </div>
            <div className="skill">
              <FaCss3Alt /> CSS
            </div>
            <div className="skill">
              <FaJs /> JavaScript
            </div>
            <div className="skill">
              <FaReact /> React.js
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <h2>Backend</h2>
          <div className="skills-list">
            <div className="skill">
              <FaNodeJs /> Node.js
            </div>
            <div className="skill">
              <SiExpress /> Express.js
            </div>
            <div className="skill">
              <SiMongodb /> MongoDB
            </div>
          </div>
        </div>

        {/* AWS & DevOps */}
        <div className="skill-category">
          <h2>AWS & DevOps</h2>
          <div className="skills-list">
            <div className="skill">
              <FaAws /> AWS
            </div>
            <div className="skill">
              <SiDocker /> Docker
            </div>
            <div className="skill">
              <SiKubernetes /> Kubernetes
            </div>
            <div className="skill">
              <SiTerraform /> Terraform
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
