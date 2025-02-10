import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import { AboutPage, HomePage } from "pages";

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
      </Routes>
    </AnimatePresence>
  );
};
