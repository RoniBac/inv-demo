import React from 'react'

export default function Location({
  name,
  address,
  image,
  mapEmbed,
  mapLink
}) {
  const openMap = () => {
    window.open(mapLink, '_blank')
  }

  return (
    
    <section className="section location">
        
      <div className="location-card">

        <img
          src={image}
          alt={name}
          className="location-image"
        />

        <p className="location-title">{name}</p>
        <p className="location-p">{address}</p>

        <div className="map-container">
          <iframe
            title={`Mapa ${name}`}
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <button
          className="map-button"
          onClick={openMap}
        >
          Cómo llegar
        </button>

      </div>
    </section>
  )
}
