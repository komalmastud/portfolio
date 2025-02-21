import React from "react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa"; // Import icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Komal Mastud. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="social-icons">
          <a
            href="https://github.com/komalmastud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/komal-mastud-42811225a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://dev.to/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
