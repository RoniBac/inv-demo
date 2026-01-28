import React from 'react'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Countdown from './components/Countdown'
import Location from './components/Location'
import Gift from './components/Gift'
import RSVP from './components/RSVP'

export default function App() {
  return (
    <>
      <Hero
        image="/hero.jpg"
        title="Andres Cumple #7"
        date="10 de Agosto 2026"
      />

      <Invitation image="/invitation.png" />

      <Countdown eventDate="2026-08-10T18:00:00" />

      <Location
        name="Princesses and Dragons"
        address="Casi Esquina Calle Francia 86, Rancho El Potrero 508-A, Rincón de La Sierra, 67194 Guadalupe, N.L."
        image="/lugar2.JPG"
        mapEmbed="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3596.610321360478!2d-100.1999193!3d25.6510556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c1bc897741f1%3A0xc18905a8f43c1b1b!2sPrincesses%20and%20Dragons!5e0!3m2!1sen!2smx!4v1769580544429!5m2!1sen!2smx"
        mapLink="https://www.google.com/maps/dir/?api=1&destination=25.6510556,-100.1973444"
        />

      <Gift
        items={[
            {
            image: '/gift-oso.jpg',
            title: 'Juguetes o peluches',
            detail: 'Le gustan los osos y personajes tiernos'
            },
            {
            image: '/gift-libros.jpg',
            title: 'Libros infantiles',
            detail: 'Cuentos ilustrados para su edad'
            },
            {
            image: '/gift-videojuego.jpg',
            title: 'Videojuegos de consola',
            detail: 'Juegos infantiles para Xbox'
            },
            {
            image: '/gift-ropa.jpg',
            title: 'Ropa infantil',
            detail: 'Talla 6–7, colores azules'
            }
        ]}
        />


      <RSVP phone="5218112345678" />
    </>
  )
}
