import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;