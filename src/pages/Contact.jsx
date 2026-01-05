import "../styles/contact.css";
import { useState, useEffect } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
    });

    const [errors, setErrors] = useState({});
    const [enviado, setEnviado] = useState(false);


    const validar = (data = formData) => {
        const newErrors = {};

        if (!data.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio.";
        } else if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,}$/.test(data.nombre)) {
            newErrors.nombre =
                "Debe tener al menos 2 letras y no contener números ni símbolos.";
        }

        if (!data.email.trim()) {
            newErrors.email = "El email es obligatorio.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    newErrors.email = "Debe ser un email válido.";
}


        if (!/^\d{10}$/.test(data.telefono)) {
            newErrors.telefono = "Debe contener exactamente 10 números.";
        }

        if (!data.mensaje.trim()) {
            newErrors.mensaje = "El mensaje es obligatorio.";
        } else if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ0-9\s]{10,500}$/.test(data.mensaje)) {
            newErrors.mensaje = "Entre 10 y 500 caracteres, sin símbolos.";
        }

        return newErrors;
    };


    useEffect(() => {
        setErrors(validar(formData));
    }, [formData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = validar(formData);
        if (Object.keys(validation).length > 0) return;

        setEnviado(true);

        setTimeout(() => {
            setEnviado(false);
            setFormData({
                nombre: "",
                email: "",
                telefono: "",
                mensaje: "",
            });
        }, 3000);
    };


    const formValido =
        Object.keys(errors).length === 0 &&
        formData.nombre &&
        formData.email &&
        formData.telefono &&
        formData.mensaje;

    return (
        <div className="container page-content">
            <div className="content-wrapper">
                <h2 className="page-title">Contacto</h2>
                <div className="contact-grid">
                    <div className="contact-form-section">
                        <h3 className="section-title">Envíanos un mensaje</h3>

                        {enviado && (
                            <div className="success-message">
                                ¡Mensaje enviado con éxito! Te contactaremos
                                pronto.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label className="form-label">
                                    Nombre <span className="required">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={(e) => {
                                        const soloLetras =
                                            e.target.value.replace(
                                                /[^A-Za-zÁÉÍÓÚÑáéíóúñ\s]/g,
                                                ""
                                            );
                                        setFormData({
                                            ...formData,
                                            nombre: soloLetras,
                                        });
                                    }}
                                    placeholder="Tu nombre completo"
                                    className={`form-input ${
                                        errors.nombre ? "input-error" : ""
                                    }`}
                                />

                                {errors.nombre && (
                                    <p className="error-text">
                                        {errors.nombre}
                                    </p>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Email <span className="required">*</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => {
                                        const sinEspacios =
                                            e.target.value.replace(/\s/g, "");
                                        setFormData({
                                            ...formData,
                                            email: sinEspacios,
                                        });
                                    }}
                                    placeholder="usuario@mail.com"
                                    className={`form-input ${
                                        errors.email ? "input-error" : ""
                                    }`}
                                />

                                {errors.email && (
                                    <p className="error-text">{errors.email}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Teléfono <span className="required">*</span>
                                </label>

                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={(e) => {
                                        const soloNumeros =
                                            e.target.value.replace(/\D/g, ""); // elimina todo lo que NO sea número
                                        if (soloNumeros.length <= 10) {
                                            setFormData({
                                                ...formData,
                                                telefono: soloNumeros,
                                            });
                                        }
                                    }}
                                    placeholder="2284123456"
                                    className={`form-input ${
                                        errors.telefono ? "input-error" : ""
                                    }`}
                                />

                                {errors.telefono && (
                                    <p className="error-text">
                                        {errors.telefono}
                                    </p>
                                )}
                            </div>

                            {/* MENSAJE */}
                            <div className="form-group">
                                <label className="form-label">
                                    Mensaje <span className="required">*</span>
                                </label>

                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={(e) => {
                                        const limpio = e.target.value.replace(
                                            /[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9\s]/g,
                                            ""
                                        );
                                        setFormData({
                                            ...formData,
                                            mensaje: limpio,
                                        });
                                    }}
                                    rows="5"
                                    placeholder="Escribe tu mensaje aquí..."
                                    className={`form-textarea ${
                                        errors.mensaje ? "input-error" : ""
                                    }`}
                                />

                                <div
                                    className={`char-count ${
                                        formData.mensaje.length < 10 ||
                                        formData.mensaje.length > 500
                                            ? "warning"
                                            : ""
                                    }`}
                                >
                                    {formData.mensaje.length}/500
                                </div>

                                {errors.mensaje && (
                                    <p className="error-text">
                                        {errors.mensaje}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={!formValido}
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    <div className="contact-info-section">
                        <div className="info-box">
                            <h3 className="section-title">
                                Información de Contacto
                            </h3>
                            <div className="info-list">
                                <div className="info-item">
                                    <span className="info-icon">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="#DB001B"
                                        >
                                            <path
                                                d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5
        c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
                                            />
                                        </svg>
                                    </span>

                                    <a
                                        href="https://maps.google.com/?q=Entre+Rios+2055+Olavarria"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="info-link"
                                    >
                                        Entre Rios 2055 – Olavarría, Buenos
                                        Aires
                                    </a>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 32 32"
                                            fill="#25D366"
                                        >
                                            <path
                                                d="M16 .6C7.6.6.6 7.6.6 16c0 2.8.7 5.4 2 7.7L0 32l8.6-2.6c2.2 1.2 
      4.7 1.9 7.4 1.9 8.4 0 15.4-7 15.4-15.4C31.4 7.6 24.4.6 16 .6zm8.9 
      22.1c-.4 1.1-2.1 2-3 2.1-.8.1-1.8.1-2.9-.2-.7-.2-1.6-.5-2.7-1-4.8-2.1-8-7-8.2-7.3-.2-.3-2-2.6-2-5s1.2-3.7 
      1.6-4.2c.4-.5.9-.6 1.2-.6h.9c.3 0 .7-.1 1.1.9.4 1 .9 2.6 1 2.8.1.2.1.4 
      0 .6-.1.3-.2.4-.4.7-.2.2-.4.5-.6.7-.2.2-.4.5-.2.9.2.4 1 1.6 2.1 
      2.6 1.4 1.2 2.6 1.6 3 .1.3-.4.7-.9 1-.9.3 0 1.6.8 1.9 1 .3.2.5.4.6.6.1.3.1 
      1.1-.3 2z"
                                            />
                                        </svg>
                                    </span>

                                    <div>
                                        <p className="info-label">WhatsApp</p>
                                        <a
                                            href="https://wa.me/5492284676102"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="info-link"
                                        >
                                            +54 9 2284 676102
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">👥</span>

                                    <a
                                        href="https://chat.whatsapp.com/HNfNHcv76cNDdYTHHhyk3N"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="info-link"
                                    >
                                        Únete a nuestro grupo de WhatsApp
                                    </a>
                                </div>

                                <div className="info-item">
                                    <img
                                        src="/imagenes/codigoQR.jpg"
                                        alt="QR Grupo WhatsApp"
                                        style={{
                                            width: "120px",
                                            borderRadius: "10px",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="hours-box">
                            <h3 className="hours-title">
                                Horarios de Atención
                            </h3>
                            <div className="hours-list">
                                <p>
                                    <strong>Lunes a Jueves:</strong> 13:00 -
                                    00:00
                                </p>
                                <p>
                                    <strong>Viernes y Sábados:</strong> 13:00 -
                                    01:00
                                </p>
                                <p>
                                    <strong>Domingos:</strong> 14:00 - 00:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
