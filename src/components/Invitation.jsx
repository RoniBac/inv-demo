import React from 'react'

export default function Invitation({ image }) {
  return (
    <section className="section invitation">
      <div className="invitation-image-wrapper">
        <img 
          src={image}
          alt="Invitación"
          className="invitation-image"
        />
      </div>
    </section>
  )
}
