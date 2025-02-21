import { useNavigate } from "react-router-dom";
import Image from "../assets/Id.jpeg";
import "./Herosection.css";
import Footer from "../Components/footer";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="heroSection" className="hero-section">
        <div className="hero-section-content-box">
          <div className="hero-section-content">
            <p className="section-title">Hey, I am Komal Mastud</p>
            <h1 className="hero-section-title">
              <span className="hero-section-title-color">
                Full Stack
                <br /> Developer
              </span>
            </h1>
            <p className="hero-section-description">
              "I am a Full Stack Developer skilled in JavaScript, HTML, CSS,
              Node.js, and MongoDB. I build responsive web apps and ensure
              smooth backend performance. I also have experience with AWS
              DevOps, CI/CD, and cloud deployment."
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate("/contact")}
            >
              Connect Me
            </button>
          </div>
        </div>
        <div className="hero-section-img">
          <img src={Image} alt="Komal Mastud" className="profile-image" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HeroSection;
