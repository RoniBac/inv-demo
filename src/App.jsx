import React, { useState, useEffect } from 'react'


import Hero from "./components/Hero"
import Invitation from "./components/Invitation"
import Countdown from "./components/Countdown"
import Location from "./components/Location"
import Gift from "./components/Gift"
import RSVP from "./components/RSVP"

export default function App() {
  const [view, setView] = useState("home") // home | boy | girl
  const boyData = {
  hero: {
    image: "/hero.jpg",
    title: "Andres Cumple #7",
    date: "10 de Agosto 2026"
  },
  invitationImage: "/invitation.png",
  eventDate: "2026-08-10T18:00:00",
  location: {
    name: "Princesses and Dragons",
    address:
      "Casi Esquina Calle Francia 86, Rancho El Potrero 508-A, Rincón de La Sierra, 67194 Guadalupe, N.L.",
    image: "/lugar2.JPG",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3596.610321360478!2d-100.1999193!3d25.6510556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c1bc897741f1%3A0xc18905a8f43c1b1b!2sPrincesses%20and%20Dragons!5e0!3m2!1sen!2smx!4v1769580544429!5m2!1sen!2smx",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=25.6510556,-100.1973444"
  },
  gifts: [
    {
      image: "/gift-oso.jpg",
      title: "Juguetes o peluches",
      detail: "Le gustan los osos y personajes tiernos"
    },
    {
      image: "/gift-libros.jpg",
      title: "Libros infantiles",
      detail: "Cuentos ilustrados para su edad"
    },
    {
      image: "/gift-videojuego.jpg",
      title: "Videojuegos de consola",
      detail: "Juegos infantiles para Xbox"
    },
    {
      image: "/gift-ropa.jpg",
      title: "Ropa infantil",
      detail: "Talla 6–7, colores azules"
    }
  ],
  phone: "5218112345678"
}

const girlData = {
  hero: {
    image: "/hero-girl.jpg",
    title: "Sofía Cumple #9",
    date: "2 de Febrero 2026"
  },
  invitationImage: "/invitation-girl.png",
  eventDate: "2026-02-02T18:00:00",
  location: boyData.location, // misma ubicación
  gifts: [
    {
      image: "/gift-muneca.jpg",
      title: "Muñecas o peluches",
      detail: "Le gustan los personajes tiernos"
    },
    {
      image: "/gift-libros.jpg",
      title: "Libros infantiles",
      detail: "Cuentos ilustrados para niñas"
    },
    {
      image: "/gift-arte.jpg",
      title: "Juguetes creativos",
      detail: "Arte y manualidades"
    },
    {
      image: "/gift-ropa.jpg",
      title: "Ropa infantil",
      detail: "Talla 6–7, tonos pastel"
    }
  ],
  phone: "5218112345678"
}




  useEffect(() => {
    if (view === "girl") {
      document.body.className = "theme-girl"
    } else {
      document.body.className = "theme-boy"
    }
  }, [view])

  // 👉 HOME
  if (view === "home") {
    return (
      <div className="home">
        <h1 className="home-title">Invitaciones Digitales</h1>
        <p className="home-subtitle">
          Elige un ejemplo para ver cómo se vería tu invitación
        </p>

        <div className="home-buttons">
          <button onClick={() => setView("boy")} className="home-btn boy">
            👦 Ejemplo Niño
          </button>

          <button onClick={() => setView("girl")} className="home-btn girl">
            👧 Ejemplo Niña
          </button>
        </div>
      </div>
    )
  }

  // 👉 DEMO
  const data = view === "boy" ? boyData : girlData

  return (
    <>
      <Hero
        image={data.hero.image}
        title={data.hero.title}
        date={data.hero.date}
      />

      <Invitation image={data.invitationImage} />

      <Countdown eventDate={data.eventDate} />

      <Location
        name={data.location.name}
        address={data.location.address}
        image={data.location.image}
        mapEmbed={data.location.mapEmbed}
        mapLink={data.location.mapLink}
      />

      <Gift items={data.gifts} />

      <RSVP phone={data.phone} />
    </>
  )
}
