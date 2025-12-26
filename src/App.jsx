import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/card.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/faqs.css";

export default function App() {

  const [currentPage, setCurrentPage] = useState("inicio");

  return (
        <div className="container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "inicio" && <Home />}
      {currentPage === "nosotros" && <About />}
      {currentPage === "contacto" && <Contact />}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
