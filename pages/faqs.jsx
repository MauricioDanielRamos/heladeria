const { useState } = React;

const PaginaFAQs = () => {
  const faqs = [
    {
      pregunta: '¿Cuáles son los métodos de pago aceptados?',
      respuesta: 'Aceptamos efectivo, tarjetas de débito, crédito (todas) y transferencias bancarias.'
    },
    {
      pregunta: '¿Hacen envíos a domicilio?',
      respuesta: 'Sí, realizamos envíos a domicilio en Olavarría. El costo varía según la distancia. Consulta por WhatsApp.'
    },
    {
      pregunta: '¿Tienen opciones sin azúcar?',
      respuesta: 'Sí, contamos con una línea de helados sin azúcar añadida, endulzados con stevia.'
    },
    {
      pregunta: '¿Puedo hacer pedidos para eventos?',
      respuesta: 'Por supuesto. Hacemos tortas heladas personalizadas y potes para eventos. Te recomendamos hacer el pedido con 48hs de anticipación.'
    },
    {
      pregunta: '¿Los helados son aptos para celíacos?',
      respuesta: 'Tenemos sabores aptos para celíacos. Consultá en el local por los sabores disponibles libres de gluten.'
    },
    {
      pregunta: '¿Ofrecen descuentos para compras mayoristas?',
      respuesta: 'Sí, contamos con precios especiales para compras a partir de 5kg. Contactanos para más información.'
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
            <a href="https://wa.me/5492284123456" target="_blank" rel="noopener noreferrer" className="cta-btn-primary">
              WhatsApp
            </a>
            <a href="mailto:info@viabana.com" className="cta-btn-secondary">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};