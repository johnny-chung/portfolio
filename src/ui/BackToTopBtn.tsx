import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        // Adjust this value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fab
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: isVisible ? "block" : "none",
        background: "#6c757d",
        opacity: 0.3,
        color: "#fff",
      }}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default BackToTopButton;
