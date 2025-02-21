import React from "react";
import Slider from "react-slick";
import "./Project.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Template images */
import Template1 from "../assets/certificate-.png";
import Template2 from "../assets/company-letter.png";
import Template3 from "../assets/makarskranti-Template.png";
import Template4 from "../assets/mocktail.png";
import Template5 from "../assets/self-card.png";

/* First project images for the slider */
import LoginPage from "../assets/Login-page.png";
import HomePage from "../assets/Home-page.png";
import BookingPage from "../assets/Booking-page.png";
import PaymentPage from "../assets/payment-page.png";
import BookingSuccess from "../assets/booking-sucess-history.png";
import Theater from "../assets/thearter-login.png";
import TodaysBooking from "../assets/today's-booking-page.png";

/* Second project images */
import Villa1 from "../assets/villa-1.png";
import Villa2 from "../assets/villa-2.png";
import Villa3 from "../assets/villa-3.png";
import Villa4 from "../assets/villa-4.png";
import Villa5 from "../assets/villa-5.png";

/* Third project images */
import Skincare1 from "../assets/skincare-1.png";
import Skincare2 from "../assets/skincare-2.png";
import Skincare3 from "../assets/skincare-3.png";
import Skincare4 from "../assets/skincare-4.png";
import Skincare5 from "../assets/skincare-5.png";
import Skincare6 from "../assets/skincare-6.png";
import Skincare7 from "../assets/skincare-7.png";

const Projects = () => {
  const frontendProjects = [
    {
      id: 1,
      title: "Online Ticket Booking Management System",
      description:
        "This project is a web-based application built using PHP, CSS, JavaScript, and MySQL to streamline ticket booking. It allows users to book tickets, view availability, and manage reservations efficiently.",
      githubLink: "https://github.com/komalmastud/online-ticket-booking.git",
      images: [
        LoginPage,
        HomePage,
        BookingPage,
        PaymentPage,
        BookingSuccess,
        Theater,
        TodaysBooking,
      ],
    },
    {
      id: 2,
      title: "Villa Project",
      description:
        "A web-based platform built with React.js for seamless villa booking. Users can browse, filter, and book villas effortlessly with a responsive UI.",
      githubLink: "https://github.com/komalmastud/villa.git",
      images: [Villa1, Villa2, Villa3, Villa4, Villa5],
    },
    {
      id: 3,
      title: "Skincare Website",
      description:
        "A React.js-based skincare website providing users with product information, routines, and tips with a clean and responsive design.",
      githubLink: "https://github.com/komalmastud/skincare-webside.git",
      images: [
        Skincare1,
        Skincare2,
        Skincare3,
        Skincare4,
        Skincare5,
        Skincare6,
        Skincare7,
      ],
    },
  ];

  const backendProjects = [
    {
      id: 4,
      title: "Chat App",
      description:
        "A real-time chat application using Node.js, Express.js,  for instant messaging and group chats.",
      githubLink: "https://github.com/komalmastud/chat-app.git",
    },
    {
      id: 5,
      title: "Blog Project",
      description:
        "A blog platform with user authentication, post creation, and comment features, built with Node.js, Express.js",
      githubLink: "https://github.com/komalmastud/blog-project.git",
    },
    {
      id: 6,
      title: "URL Shortener",
      description:
        "A backend project that converts long URLs into short, shareable links using Node.js, Express.js, and MongoDB.",
      githubLink: "https://github.com/komalmastud/url-project.git",
    },
  ];

  const templateData = [
    {
      id: 8,
      title: "Certificate Template",
      description:
        "A professional certificate template designed for official documents and achievements.",
      image: Template1,
      githubLink: "https://github.com/komalmastud/certificate-assignments.git",
    },
    {
      id: 9,
      title: "Company Letter Template",
      description:
        "A well-structured company letter template for formal communication and documentation.",
      image: Template2,
      githubLink: "https://github.com/komalmastud/letter-assignments.git",
    },
    {
      id: 10,
      title: "Makar Sankranti Template",
      description:
        "A festive Makar Sankranti greeting template with traditional design elements.",
      image: Template3,
      githubLink: "https://github.com/komalmastud/beauty-template-.git",
    },
    {
      id: 11,
      title: "Mocktail Menu Template",
      description:
        "A creative menu template for mocktail presentations in cafes and restaurants.",
      image: Template4,
      githubLink: "https://github.com/komalmastud/menu-card-assignments.git",
    },
    {
      id: 12,
      title: "Self-Card Template",
      description:
        "A creative self-card template for personal card use for office and personal use.",
      image: Template5,
      githubLink: "https://github.com/komalmastud/icard-assignments.git",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1>Frontend Projects</h1>
        <div className="projects-grid">
          {frontendProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              {project.images && (
                <Slider {...sliderSettings}>
                  {project.images.map((img, index) => (
                    <div key={index} className="slider-image-container">
                      <img
                        src={img}
                        alt={`Slide ${index}`}
                        className="slider-image"
                      />
                    </div>
                  ))}
                </Slider>
              )}
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        <h1>Backend Projects</h1>
        <div className="projects-grid">
          {backendProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        <h1>Templates</h1>
        <div className="templates-grid">
          {templateData.map((template) => (
            <div key={template.id} className="template-card">
              <img
                src={template.image}
                alt={template.title}
                className="template-image"
              />
              <h2>{template.title}</h2>
              <p>{template.description}</p>
              <a
                href={template.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
