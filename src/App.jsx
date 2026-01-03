import { useState, useEffect } from "react";
import React from "react";


import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import WhatsappButton from "./components/whatsappButon";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/card.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/faqs.css";
import "./styles/WhatsappButton.css";

export default function App() {

  const [currentPage, setCurrentPage] = useState("inicio");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
        <div className="container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "inicio" && <Home />}
      {currentPage === "nosotros" && <About />}
      {currentPage === "contacto" && <Contact />}
      {currentPage === "faqs" && <Faqs />}

      <Footer setCurrentPage={setCurrentPage} />
      <WhatsappButton />
    </div>
  );
}
