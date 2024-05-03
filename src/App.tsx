import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./features/navBar/NavBar";
import Intro from "./features/intro/Intro";
import ProjectList from "./features/projects/ProjectList";
import { Footer } from "./ui/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ paddingTop: "60px" }}>
          {" "}
          {/* Adjust 64px to match the height of your AppBar */}
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/projects" element={<ProjectList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
