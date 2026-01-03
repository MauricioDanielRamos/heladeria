import '../styles/footer.css';

export default function Footer({ setCurrentPage }) {
  return (
      <footer className="footer">
          <div className="container">
              <div className="footer-grid">
                  <div className="footer-column">
                      <h3 className="footer-title">Enlaces</h3>
                      <ul className="footer-links">
                          <li>
                              <button
                                  onClick={() => setCurrentPage("nosotros")}
                                  className="footer-link"
                              >
                                  Sobre Nosotros
                              </button>
                          </li>
                          <li>
                              <button
                                  onClick={() => setCurrentPage("contacto")}
                                  className="footer-link"
                              >
                                  Contacto
                              </button>
                          </li>
                          <li>
                              <button
                                  onClick={() => setCurrentPage("faqs")}
                                  className="footer-link"
                              >
                                  Preguntas Frecuentes
                              </button>
                          </li>
                      </ul>
                  </div>

                  <div className="footer-column">
                      <h3 className="footer-title">Contacto</h3>
                      <ul className="footer-contact">
                          <li className="contact-item">
                              <a
                                  href="https://www.google.com/maps?q=Entre+Rios+2055,+Olavarría,+Buenos+Aires"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="contact-item"
                              >
                                  <span className="contact-icon">
                                      <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 24 24"
                                          fill="red"
                                      >
                                          <path
                                              d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 
        9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
                                          />
                                      </svg>
                                  </span>
                                  <span>
                                      Entre Rios 2055, Olavarría, Buenos Aires
                                  </span>
                              </a>
                          </li>

                          <li className="contact-item">
                              <span className="contact-icon">📞</span>
                              <a href="tel:+542284676102">+54 2284 676102</a>
                          </li>
                          <li className="contact-item">
                              <span className="contact-icon">
                                  <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 32 32"
                                      fill="#25D366"
                                  >
                                      <path
                                          d="M16 .6C7.6.6.6 7.6.6 16c0 2.8.7 5.4 2 7.7L0 32l8.6-2.6c2.2 1.2 
      4.7 1.9 7.4 1.9 8.4 0 15.4-7 15.4-15.4C31.4 7.6 24.4.6 16 .6zm8.9 
      22.1c-.4 1.1-2.1 2-3 2.1-.8.1-1.8.1-2.9-.2-.7-.2-1.6-.5-2.7-1-4.8-2.1-8-7-8.2-7.3-.2-.3-2-2.6-2-5s1.2-3.7 
      1.6-4.2c.4-.5.9-.6 1.2-.6h.9c.3 0 .7-.1 1.1.9.4 1 .9 2.6 1 2.8.1.2.1.4 
      0 .6-.1.3-.2.4-.4.7-.2.2-.4.5-.6.7-.2.2-.4.5-.2.9.2.4 1 1.6 2.1 
      2.6 1.4 1.2 2.6 1.6 3 .1.3-.4.7-.9 1-.9.3 0 1.6.8 1.9 1 .3.2.5.4.6.6.1.3.1 
      1.1-.3 2z"
                                      />
                                  </svg>
                              </span>

                              <a
                                  href="https://wa.me/5492284676102"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  WhatsApp
                              </a>
                          </li>
                          <li className="contact-item">
                              <span className="contact-icon">👥</span>
                              <a
                                  href="https://chat.whatsapp.com/HNfNHcv76cNDdYTHHhyk3N"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  Únete a nuestro grupo de WhatsApp
                              </a>
                          </li>

                          <li className="contact-item">
                              <img
                                  src="/imagenes/codigoQR.jpg"
                                  alt="QR Grupo WhatsApp"
                                  style={{
                                      width: "120px",
                                      borderRadius: "10px",
                                  }}
                              />
                          </li>
                      </ul>
                  </div>

                  <div className="footer-column">
                      <h3 className="footer-title">Vía Bana Ola</h3>
                      <p className="footer-description">
                          Los mejores helados de Olavarría. Sabores únicos,
                          calidad premium y atención excepcional.
                      </p>
                  </div>
              </div>

              <div className="footer-bottom">
                  <p>
                      &copy; 2025 Mauricio Daniel Ramos. Todos los derechos
                      reservados.
                  </p>
              </div>
          </div>
      </footer>
  );
};