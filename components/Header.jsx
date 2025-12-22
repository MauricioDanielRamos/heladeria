const { useState } = React;

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Sobre Nosotros' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-circle">
              <span className="logo-text">VB</span>
            </div>
            <h1 className="site-title">Vía Bana</h1>
          </div>

          <nav className="nav-desktop">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`nav-btn ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="nav-mobile">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`nav-btn-mobile ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};