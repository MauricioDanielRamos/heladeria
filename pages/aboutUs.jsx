const PaginaNosotros = () => {
  return (
    <div className="container page-content">
      <div className="content-wrapper">
        <h2 className="page-title">Sobre Nosotros</h2>
        
        <div className="content-box">
          <div className="section-block">
            <h3 className="section-title">Nuestra Historia</h3>
            <p className="section-text">
              Vía Bana nació en 2004 con el sueño de crear los mejores helados artesanales
              de Olavarría. Comenzamos como una pequeña heladería familiar y, gracias a la
              confianza de nuestros clientes, nos hemos convertido en un referente de calidad
              y sabor en la región.
            </p>
            <p className="section-text">
              Durante más de 20 años, hemos mantenido nuestro compromiso con la excelencia,
              utilizando ingredientes de primera calidad y recetas artesanales que hacen
              de cada bocado una experiencia única.
            </p>
          </div>

          <div className="section-block">
            <h3 className="section-title">Nuestra Misión</h3>
            <p className="section-text">
              Ofrecer helados artesanales de la más alta calidad, elaborados con ingredientes
              naturales y mucho amor, para endulzar los momentos especiales de nuestros clientes
              y crear recuerdos inolvidables.
            </p>
          </div>

          <div className="section-block">
            <h3 className="section-title">Nuestros Valores</h3>
            <ul className="values-list">
              <li className="value-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Calidad:</strong>
                  <span> Utilizamos solo los mejores ingredientes</span>
                </div>
              </li>
              <li className="value-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Tradición:</strong>
                  <span> Recetas artesanales transmitidas por generaciones</span>
                </div>
              </li>
              <li className="value-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Innovación:</strong>
                  <span> Constantemente creamos nuevos sabores</span>
                </div>
              </li>
              <li className="value-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Compromiso:</strong>
                  <span> Con nuestros clientes y la comunidad</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="why-choose">
            <h3 className="section-title">¿Por qué elegirnos?</h3>
            <div className="features-grid">
              <div className="feature">
                <span className="feature-icon">🥇</span>
                <span>Más de 20 años de experiencia</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🏆</span>
                <span>Premios locales de calidad</span>
              </div>
              <div className="feature">
                <span className="feature-icon">👨‍🍳</span>
                <span>Maestros heladeros certificados</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <span>Ingredientes naturales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};