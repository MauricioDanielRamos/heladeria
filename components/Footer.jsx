const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Enlaces</h3>
            <ul className="footer-links">
              <li>
                <button onClick={() => setCurrentPage('nosotros')} className="footer-link">
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contacto')} className="footer-link">
                  Contacto
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('faqs')} className="footer-link">
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-contact">
              <li className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Av. Principal 1234, Olavarría, Buenos Aires</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+542284123456">+54 2284 123-456</a>
              </li>
              <li className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@viabana.com">info@viabana.com</a>
              </li>
              <li className="contact-item">
                <span className="contact-icon">💬</span>
                <a href="https://wa.me/5492284123456" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Vía Bana</h3>
            <p className="footer-description">
              Los mejores helados artesanales de Olavarría. Sabores únicos,
              calidad premium y atención excepcional.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Vía Bana Heladería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};