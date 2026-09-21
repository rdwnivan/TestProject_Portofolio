import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white text-slate-900 p-8">
          <div className="text-center max-w-md">
            <h1 className="font-display text-2xl font-bold mb-3">Something went wrong</h1>
            <p className="text-slate-600 mb-6">An unexpected error occurred. Please try refreshing the page.</p>
            <a href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-800 text-white rounded-lg font-medium text-sm hover:bg-cyan-900 transition-colors">
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
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
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
