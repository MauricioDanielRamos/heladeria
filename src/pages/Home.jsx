import '../styles/home.css';
import Card from '../components/Card';

export default function Home() {
          const sabores = [
            { title: 'Dulce de Leche', description: 'Clásico argentino cremoso', image: "imagenes/ddl.jpg" },
            { title: 'Chocolate', description: 'Intenso y suave', image: "imagenes/chocolate.png" },
            { title: 'Frutilla a la crema', description: 'Con trozos de fruta natural', image: "imagenes/frutillaCrema.png" },
            { title: 'Limón', description: 'Refrescante y natural', image: "imagenes/limon.png" },
            { title: 'Menta Granizada', description: 'Con chips de chocolate', image: "imagenes/mentaGranizada.png" },
            { title: 'Vainilla', description: 'Tradicional y delicioso', image: "imagenes/vainilla.png" },
            { title: 'Banana Split', description: 'Banana con DDL', image: "imagenes/bananaConDdl.png" },
            { title: 'Capuccino Granizado', description: 'Café y chocolate', image: "imagenes/capuccinoGranizado.png" },
            { title: 'Frutilla al agua', description: 'Con trozos de fruta natural', image: "imagenes/frutillaAgua.png" },
            { title: 'Maracuyá', description: 'Tropical y refrescante', image: "imagenes/maracuya.png" },
            { title: 'DDL granizado', description: 'DDL y chocolate', image: "imagenes/ddlGranizado.png" },
            { title: 'Crema Flan', description: 'El flan echo helado', image: "imagenes/cremaFlan.png" },
            { title: 'Durazno', description: 'Con trozos de fruta natural', image: "imagenes/durazno.png" },
            { title: 'Granizado', description: 'Americana y chocolate', image: "imagenes/granizado.png" },
            { title: 'Frutos Rojos al agua', description: 'Con trozos de fruta natural', image: "imagenes/frutosRojos.png" },
            { title: 'Nutribana', description: 'Crema Americana multicolor', image: "imagenes/nutribana.png" },
            { title: 'Crema Cookie', description: 'Americana con galletitas Oreo', image: "imagenes/cremaCookie.png" },
            { title: 'Crocantino', description: 'Chocolate, mani y ddl', image: "imagenes/crocantino.png" },
            { title: 'Palito Bombón', description: 'Americana y chocolate', image: "imagenes/palitoBombon.png" },
            { title: 'palito de Limón', description: 'Limón refrescante', image: "imagenes/palitoAguaLimon.png" },
            { title: 'palito de frutilla', description: 'Frutilla al agua', image: "imagenes/palitoAguaFrutilla.png" },
          ];

          //const especiales = [
          //  { title: 'Palito Bombón', description: 'Americana cubierta de chocolate', image: //'imagenes/palitoBombon.png', price: '15500' },
          //  { title: 'Martes 2x1', description: 'Todos los cucuruchos', image: '🎉', price: '1200' },
          //  { title: 'Cumpleaños', description: 'Torta helada 2kg', image: '🎂', price: '8900' },
          //  { title: 'Happy Hour', description: '14-17hs 20% OFF', image: '⏰' },
          //  { title: 'Pack Verano', description: '2kg + 4 palitos', image: '🏖️', price: '78800' }
         // ];

          const promociones = [
            { title: 'Combo Familiar', description: '2 kg', image: 'imagenes/dosKilos.jpg', price: '15500' },
            { title: 'Kilo y medio', description: '1 kg y 1/2 kg', image: 'imagenes/kiloMasMedioKilo.png', price: '12500' },
            { title: '1 kg + 6 conos', description: '1 kg + 6 conos', image: 'imagenes/kiloMasSeisConos.png', price: '9000' },
            { title: '2 Cuartos', description: '2 potes de 1/4 kg', image: 'imagenes/dosCuartos.jpg', price: '5500' },
            //{ title: 'Pack Verano', description: '2kg + 4 palitos', image: '🏖️', price: '7800' }
          ];

          const precios = [
            { title: 'Cucurucho Simple', description: '1 bocha', image: 'imagenes/conoUnaBocha.jpg', price: '1500' },
            { title: 'Cucurucho Doble', description: '2 bochas', image: 'imagenes/conoDosBochas.jpg', price: '2000' },
            { title: 'Cucurucho Triple', description: '3 bochas', image: 'imagenes/conoTresBochas.jpg', price: '2500' },
            { title: 'Pote 1/4kg', description: 'Hasta 2 sabores', image: 'imagenes/cuartoKilo.jpg', price: '3000' },
            { title: 'Pote 1/2kg', description: 'Hasta 3 sabores', image: 'imagenes/medioKilo.jpg', price: '5000' },
            { title: 'Pote 1kg', description: 'Hasta 4 sabores', image: 'imagenes/kilo.jpg', price: '8000' },
            { title: 'Palito Bombon', description: 'Chocolate y americana', image: 'imagenes/palitoBombon.png', price: '700' },
            { title: 'Palito agua limon', description: 'Limon refrescante', image: 'imagenes/palitoAguaLimon.png', price: '550' },
            { title: 'Palito agua frtutilla', description: 'Frutilla refrescante', image: 'imagenes/palitoAguaFrutilla.png', price: '550' },
            //{ title: 'Banana Split', description: 'Clásico con 3 bochas', image: '🍌', price: '550' },
            { title: 'Crocantino', description: 'Chocolate, mani y dd', image: 'imagenes/crocantino.png', price: '7500' }
          ];

          return (
            <div className="container page-content">
              <div className="hero">
                <h2 className="hero-title">¡Bienvenidos a Vía Bana Ola!</h2>
                <p className="hero-subtitle">Los mejores helados de Olavarría</p>
                <p className="hero-text">Endulzando tus momentos especiales</p>
                <p className="hero-text">Horarios de Atención: Todos los días de 13 a 00 hs</p>
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