import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { useSpring, animated } from "react-spring";
import "./nameCard.css"; // Import custom CSS for styling

const NameCard: React.FC = () => {
  const linksSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500, // Delay the links animation
    config: { duration: 2000 },
  });

  useEffect(() => {
    const typingTimeout1 = setTimeout(() => {
      setTimeout(() => {
        document.getElementById("typing-text1")?.classList.add("typing");
      }, 100);
    }, 0); // Start typing "I am Johnny" immediately

    const typingTimeout2 = setTimeout(() => {
      setTimeout(() => {
        document.getElementById("typing-text2")?.classList.add("typing");
      }, 100);
    }, 2100); // Start typing "A software developer" after 3 seconds

    return () => {
      clearTimeout(typingTimeout1);
      clearTimeout(typingTimeout2);
    };
  }, []);

  return (
    <div className="name-card-container">
      <div className="overlay">
        <div className="name-card">
          <div className="avatar-section">
            <Avatar
              alt="Johnny C."
              src="https://res.cloudinary.com/dp2anoz4i/image/upload/v1713816219/portfolio/DSC_0803_z6q4zn.jpg"
              sx={{ width: "100%", height: "100%", borderRadius: "50%" }}
              className="avatar-large"
            />
          </div>
          <div className="info-section">
            <div className="name-card-text">
              <h1 id="typing-text1" className="text-4xl font-bold typing-text">
                <span>Johnny C.</span>
              </h1>
              <h2 id="typing-text2" className="typing-text">
                <span>{` Software developer`}</span>
              </h2>
            </div>
            <animated.div style={linksSpring} className="links">
              <h4 style={{ marginBottom: "8px" }}>
                <PlaceIcon style={{ marginRight: "5px" }} />
                GTA, Canada
              </h4>
              <a
                href="https://www.linkedin.com/in/johnny-wychung/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ marginRight: "5px" }} />
                LinkedIn
              </a>
              <a
                href="https://github.com/johnny-chung"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon style={{ marginRight: "5px" }} />
                GitHub
              </a>
              <a href="mailto:johnny.chung2046@gmail.com">
                <EmailIcon style={{ marginRight: "5px" }} />
                johnny.chung2046@gmail.com
              </a>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
