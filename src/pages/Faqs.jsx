import '../styles/faqs.css';
import { useState } from "react";



export default function Faqs() {
          const faqs = [
            {
              pregunta: '¿Cuáles son los métodos de pago aceptados?',
              respuesta: 'Aceptamos efectivo, transferencias por billeteras virtuales y transferencias bancarias.'
            },
            {
              pregunta: '¿Hacen envíos a domicilio?',
              respuesta: 'El envío es a cargo del comprador.'
            },
            {
              pregunta: '¿Tienen opciones sin azúcar?',
              respuesta: 'No, nuestros helados contienen azúcar.'
            },
            {
              pregunta: '¿Puedo hacer pedidos para eventos?',
              respuesta: 'Por supuesto. Tomamos pedidos para eventos. Te recomendamos hacer el pedido con 48hs de anticipación.'
            },
            {
              pregunta: '¿Los helados son aptos para celíacos?',
              respuesta: 'No tenemos sabores aptos para celíacos. '
            },
            {
              pregunta: '¿Ofrecen descuentos para compras mayoristas?',
              respuesta: 'Sí, contamos con precios especiales, los cuales se encuentran detallados en la página. Contactanos para más información.'
            }
          ];

          const [abierto, setAbierto] = useState(null);

          return (
            <div className="container page-content">
              <div className="content-wrapper-narrow">
                <h2 className="page-title">Preguntas Frecuentes</h2>
                
                <div className="faqs-list">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <button
                        onClick={() => setAbierto(abierto === index ? null : index)}
                        className="faq-question"
                      >
                        <span className="faq-text">{faq.pregunta}</span>
                        <span className="faq-icon">
                          {abierto === index ? '−' : '+'}
                        </span>
                      </button>
                      {abierto === index && (
                        <div className="faq-answer">
                          <p>{faq.respuesta}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="faq-cta">
                  <h3 className="cta-title">¿No encontraste tu respuesta?</h3>
                  <p className="cta-text">Contactanos y con gusto te ayudaremos</p>
                  <div className="cta-buttons">
                    <a href="https://wa.me/5492284676102" target="_blank" rel="noopener noreferrer" className="cta-btn-primary">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        };