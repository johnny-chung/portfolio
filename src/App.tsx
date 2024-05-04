import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
