import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useSpotlight } from "./lib/useSpotlight";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface text-ink p-8">
          <div className="text-center max-w-md">
            <h1 className="font-display text-2xl font-bold mb-3">Something went wrong</h1>
            <p className="text-ink-muted mb-6">An unexpected error occurred. Please try refreshing the page.</p>
            <a href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-400 text-white rounded-lg font-medium text-sm hover:bg-primary-500 transition-colors">
              Reload page
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useSpotlight();

  return (
    <div className="min-h-screen bg-surface text-ink transition-colors duration-300">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="noise-overlay" />
      <ErrorBoundary>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
