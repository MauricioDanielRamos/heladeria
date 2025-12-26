import '../styles/card.css';

export default function Card({ title, description, image, price }) {
  return (
    <div className="card">
      <div className="card-image">
       <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {price && <p className="card-price">${price}</p>}
      </div>
    </div>
  );
}

