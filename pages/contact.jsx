const { useState } = React;

const PaginaContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    }, 3000);
  };

  return (
    <div className="container page-content">
      <div className="content-wrapper">
        <h2 className="page-title">Contacto</h2>

        <div className="contact-grid">
          <div className="contact-form-section">
            <h3 className="section-title">Envíanos un mensaje</h3>
            
            {enviado && (
              <div className="success-message">
                ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+54 2284 123-456"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-box">
              <h3 className="section-title">Información de Contacto</h3>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <p className="info-label">Dirección</p>
                    <p className="info-detail">Av. Principal 1234</p>
                    <p className="info-detail">Olavarría, Buenos Aires</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <p className="info-label">Teléfono</p>
                    <a href="tel:+542284123456" className="info-link">
                      +54 2284 123-456
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">💬</span>
                  <div>
                    <p className="info-label">WhatsApp</p>
                    <a href="https://wa.me/5492284123456" target="_blank" rel="noopener noreferrer" className="info-link">
                      +54 9 2284 123-456
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <p className="info-label">Email</p>
                    <a href="mailto:info@viabana.com" className="info-link">
                      info@viabana.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hours-box">
              <h3 className="hours-title">Horarios de Atención</h3>
              <div className="hours-list">
                <p><strong>Lunes a Viernes:</strong> 10:00 - 23:00</p>
                <p><strong>Sábados:</strong> 10:00 - 00:00</p>
                <p><strong>Domingos:</strong> 14:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};