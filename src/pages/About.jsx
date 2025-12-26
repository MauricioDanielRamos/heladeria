import '../styles/about.css';

export default function About() {
          return (
            <div className="container page-content">
              <div className="content-wrapper">
                <h2 className="page-title">Sobre Nosotros</h2>
                
                <div className="content-box">
                  <div className="section-block">
                    <h3 className="section-title">Nuestra Historia</h3>
                    <p className="section-text">
                      Vía Bana Ola abrió sus puertas en Julio de 2024 con el sueño de brindar los mejores y mas economicos helados de Olavarría.
                     Somos una pequeña heladería familiar y, gracias a la
                      confianza de nuestros clientes, nos hemos convertido en un referente de calidad
                      y sabor en la ciudad.
                    </p>
                    <p className="section-text">
                      Durante estos años, hemos mantenido nuestro compromiso con la excelencia,
                      proveyendo helados de primera calidad que hacen
                      de cada bocado una experiencia única.
                    </p>
                  </div>

                  <div className="section-block">
                    <h3 className="section-title">Nuestra Misión</h3>
                    <p className="section-text">
                      Ofrecer helados de la más alta calidad, elaborados con ingredientes
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
                          <span> Constantemente traemos nuevos sabores</span>
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
                        <span>El helado mas rico de la ciudad</span>
                      </div>
                      <div className="feature">
                        <span className="feature-icon">🏆</span>
                        <span>El helado mas económico de la ciudad</span>
                      </div>
                      <div className="feature">
                        <span className="feature-icon">👨‍🍳</span>
                        <span>Excelente atención y servicio</span>
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