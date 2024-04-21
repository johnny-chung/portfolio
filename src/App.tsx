import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./features/navBar/NavBar";
import Intro from "./features/intro/Intro";
import ProjectList from "./features/projects/ProjectList";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
