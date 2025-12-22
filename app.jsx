const { useState } = React;

const PaginaInicio = () => {
  const sabores = [
    { title: 'Dulce de Leche', description: 'Clásico argentino cremoso', image: '🍮' },
    { title: 'Chocolate Belga', description: 'Intenso y suave', image: '🍫' },
    { title: 'Frutilla', description: 'Con trozos de fruta natural', image: '🍓' },
    { title: 'Limón', description: 'Refrescante y natural', image: '🍋' },
    { title: 'Menta Granizada', description: 'Con chips de chocolate', image: '🌿' },
    { title: 'Vainilla Premium', description: 'Tradicional y delicioso', image: '🥛' },
    { title: 'Banana Split', description: 'Con nueces y chocolate', image: '🍌' },
    { title: 'Café Irlandés', description: 'Con whisky y crema', image: '☕' },
    { title: 'Pistacho', description: 'Importado de Sicilia', image: '🥜' },
    { title: 'Maracuyá', description: 'Tropical y refrescante', image: '🥭' }
  ];

  const promociones = [
    { title: 'Combo Familiar', description: '1kg + 2 cucuruchos', image: '👨‍👩‍👧‍👦', price: '6500' },
    { title: 'Martes 2x1', description: 'Todos los cucuruchos', image: '🎉', price: '1200' },
    { title: 'Cumpleaños', description: 'Torta helada 2kg', image: '🎂', price: '8900' },
    { title: 'Happy Hour', description: '14-17hs 20% OFF', image: '⏰' },
    { title: 'Pack Verano', description: '2kg + 4 palitos', image: '🏖️', price: '7800' }
  ];

  const precios = [
    { title: 'Cucurucho Simple', description: '1 bocha', image: '🍦', price: '800' },
    { title: 'Cucurucho Doble', description: '2 bochas', image: '🍦', price: '1200' },
    { title: 'Pote 1/4kg', description: 'Hasta 2 sabores', image: '🥡', price: '2200' },
    { title: 'Pote 1/2kg', description: 'Hasta 3 sabores', image: '🥡', price: '3800' },
    { title: 'Pote 1kg', description: 'Hasta 4 sabores', image: '🥡', price: '6800' },
    { title: 'Palito Premium', description: 'Chocolate o dulce de leche', image: '🍡', price: '950' },
    { title: 'Sundae', description: 'Con salsa y crema', image: '🍨', price: '1800' },
    { title: 'Milkshake', description: 'Sabor a elección', image: '🥤', price: '1500' },
    { title: 'Banana Split', description: 'Clásico con 3 bochas', image: '🍌', price: '2400' },
    { title: 'Torta Helada 1kg', description: 'Personalizada', image: '🎂', price: '5500' }
  ];

  return (
    <div className="container page-content">
      <div className="hero">
        <h2 className="hero-title">¡Bienvenidos a Vía Bana!</h2>
        <p className="hero-subtitle">Los mejores helados artesanales de Olavarría</p>
        <p className="hero-text">Más de 20 años endulzando tus momentos especiales</p>
      </div>

      <section className="section">
        <h2 className="section-header">Nuestros Sabores</h2>
        <div className="cards-grid">
          {sabores.map((sabor, index) => (
            <Card key={index} {...sabor} />
          ))}
        </div>
      </section>

      <section className="section promo-section">
        <h2 className="section-header promo-header">Promociones Especiales</h2>
        <div className="cards-grid">
          {promociones.map((promo, index) => (
            <Card key={index} {...promo} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-header">Precios Regulares</h2>
        <div className="cards-grid">
          {precios.map((precio, index) => (
            <Card key={index} {...precio} />
          ))}
        </div>
      </section>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <PaginaInicio />;
      case 'nosotros':
        return <PaginaNosotros />;
      case 'contacto':
        return <PaginaContacto />;
      case 'faqs':
        return <PaginaFAQs />;
      default:
        return <PaginaInicio />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);