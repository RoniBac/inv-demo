import React from 'react'

export default function Hero({ image, title, date }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>{title}</h1>
        <span className="hero-date">{date}</span>
      </div>
    </section>
  )
}
