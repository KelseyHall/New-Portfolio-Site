import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactPage from '../Pages/Contact';

import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';

const RouterSwitch = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>

      <Route path="/projects" element={<ProjectsPage />}></Route>
      <Route path="/contactme" element={<ContactPage />}></Route>
    </Routes>
  );
};

export default RouterSwitch;
