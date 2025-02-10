import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import { AboutPage, BusinessPage, HomePage, ProjectsPage } from "pages";

import { AnimatedWrapper } from "./_components/AnimatedWrapper";

export const MotionRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedWrapper>
              <HomePage />
            </AnimatedWrapper>
          }
        />

        <Route
          path="/about"
          element={
            <AnimatedWrapper>
              <AboutPage />
            </AnimatedWrapper>
          }
        />

        <Route
          path="/projects"
          element={
            <AnimatedWrapper>
              <ProjectsPage />
            </AnimatedWrapper>
          }
        />

        <Route
          path="/business"
          element={
            <AnimatedWrapper>
              <BusinessPage />
            </AnimatedWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
