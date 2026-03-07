import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SelectedWorks from "./sections/SelectedWorks";
import Journal from "./sections/Journal";
import Explorations from "./sections/Explorations";
import Stats from "./sections/Stats";
import ContactFooter from "./sections/ContactFooter";
import KenanganPage from "./pages/works/KenanganPage";
import DocsRepoPage from "./pages/works/DocsRepoPage";
import YayPlantsPage from "./pages/projects/YayPlantsPage";
import AccommodationXPage from "./pages/projects/AccommodationXPage";
import LingoLinkPage from "./pages/projects/LingoLinkPage";
import BCARevampPage from "./pages/projects/BCARevampPage";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SelectedWorks />
      <Journal />
      <Explorations />
      <Stats />
      <ContactFooter />
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/kenangan" element={<KenanganPage />} />
            <Route path="/work/docs-repo" element={<DocsRepoPage />} />
            <Route path="/project/yay-plants" element={<YayPlantsPage />} />
            <Route path="/project/accommodationx" element={<AccommodationXPage />} />
            <Route path="/project/lingolink" element={<LingoLinkPage />} />
            <Route path="/project/bca-revamp" element={<BCARevampPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
