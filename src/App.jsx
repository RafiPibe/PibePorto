import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import KenanganPage from './pages/works/Kenangan';
import DocsRepoPage from './pages/works/DocsRepo';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Header />
      <main className="container mx-auto px-6">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Work />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/work/kenangan" element={<KenanganPage />} />
          <Route path="/work/docs-repo" element={<DocsRepoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Root;
