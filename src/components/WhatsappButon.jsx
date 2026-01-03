import whatsappIcon from "../../public/imagenes/iconow.png";
import "../styles/WhatsappButton.css";

const WhatsappButton = ({
    phoneNumber = "+542284676102",
    message = "¿En qué podemos ayudarte?",
}) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <div className="container-boton-Whatsapp">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img className="boton" src={whatsappIcon} alt="Whatsapp" />
            </a>
        </div>
    );
};

export default WhatsappButton;
