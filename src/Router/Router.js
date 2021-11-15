import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactPage from '../Pages/Contact';
import GalleryPage from '../Pages/Gallery';
import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';

const RouterSwitch = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contactme">contact me</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/contactme" element={<ContactPage />}></Route>
      </Routes>
    </Router>
  );
};

export default RouterSwitch;
