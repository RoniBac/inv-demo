import React from 'react'

export default function RSVP({ phone }) {
  const message = 'Confirmo mi asistencia 🎉'

  return (
    <section className="section rsvp">
      <div className="rsvp-card">
        <img src="/confirmacion.png" alt="Reloj" className="countdown-icon" />
        <h3>Confirmar asistencia</h3>

        <p className="rsvp-text">
          Por favor confirma tu asistencia para ayudarnos con la organización.
        </p>

        <a
          className="rsvp-button"
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="rsvp-icon"
          />
          Confirmar por WhatsApp
        </a>
      </div>
    </section>
  )
}
