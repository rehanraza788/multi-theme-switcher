import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
// import { About } from "./pages/About";
import "./App.css"; // Ensure you have this CSS file
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="app-container">
          <Header />
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
