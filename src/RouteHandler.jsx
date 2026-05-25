import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { PageLayout } from './PageLayout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Main from './pages/main/Main';
import Projects from './pages/projects/Projects';
import PrivateProject from './pages/projects/private_project/PrivateProject';

const RouteHandler = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={pathname}
      >
        <Route
          path="/"
          element={
            <PageLayout pathname={pathname}>
              <Main />
            </PageLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageLayout pathname={pathname}>
              <About />
            </PageLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <PageLayout pathname={pathname}>
              <Projects />
            </PageLayout>
          }
        />
        <Route
          path="/private-project/:name"
          element={
            <PageLayout pathname={pathname}>
              <PrivateProject />
            </PageLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PageLayout pathname={pathname}>
              <Contact />
            </PageLayout>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RouteHandler;
