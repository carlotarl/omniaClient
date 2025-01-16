import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Servicios() {
  const API_URL = import.meta.env.VITE_API;
  const [serviciosYoga, setServiciosYoga] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/servicios`).then(response => {
      console.log('response', response.data)
      setServiciosYoga(response.data)
    })
  }, [])

  return (
    <section className='serviciosCards'>
      {serviciosYoga.map(servicio => {
        return <article className='servicios__contenedorYoga' key={servicio.id}>

          <h2 className='servicios__titulo'>{servicio.nombre}</h2>
          <p>{servicio.descripcion}</p>
          <p>Duración: {servicio.duracion}</p>
          <p>Precio: {servicio.precio} €</p>
          <img src={API_URL+servicio.foto} alt="imagen yoga" className='serviciosCards__imagenes '/>
        </article>
      })}
    </section>




  )
}

export default Servicios
