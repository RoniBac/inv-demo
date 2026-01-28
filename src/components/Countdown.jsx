import React, { useEffect, useState } from 'react'

export default function Countdown({ eventDate }) {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(eventDate) - new Date()

      if (diff <= 0) return

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / 1000 / 60) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTime({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [eventDate])

  return (
    <section className="section countdown">
      <img src="/reloj.png" alt="Reloj" className="countdown-icon" />

      <h3 className="countdown-title">Falta</h3>

      <div className="countdown-grid">

        <div className="time-block">
          <span className="number">{time.days}</span>
          <span className="label">Días</span>
        </div>

        <span className="colon">:</span>

        <div className="time-block">
          <span className="number">{time.hours}</span>
          <span className="label">Horas</span>
        </div>

        <span className="colon">:</span>

        <div className="time-block">
          <span className="number">{time.minutes}</span>
          <span className="label">Minutos</span>
        </div>

        <span className="colon">:</span>

        <div className="time-block">
          <span className="number">{time.seconds}</span>
          <span className="label">Segundos</span>
        </div>

      </div>
    </section>
  )
}
