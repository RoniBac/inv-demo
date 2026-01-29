import React from 'react'

export default function Gift({ items }) {
  return (
    <section className="section gift">
        <img src="/regalo.png" alt="Reloj" className="countdown-icon" />
      <h3>Sugerencias de regalo</h3>
        <div className='gift-s'>
          <p className="gift-footer">
        Tu presencia es el mejor regalo pero aqui estan una sugerencia de regalos:
        </p>  
        
        <div className="gift-grid">
            
            {items.map((item, index) => (
            <div className="gift-card" key={index}>
                <img
                src={item.image}
                alt={item.title}
                className="gift-image"
                />

                <p className="gift-title">{item.title}</p>
                <p className="gift-detail">{item.detail}</p>
            </div>
            ))}
        </div>
      </div>

      
    </section>
  )
}
