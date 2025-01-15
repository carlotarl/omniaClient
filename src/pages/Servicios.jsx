import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Servicios() {

  let link = import.meta.env.VITE_API_SERVICIOS;

  const [serviciosYoga, setServiciosYoga] = useState([])

  useEffect(() => {

    axios.get(link).then(response => {
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
          <img src={"http://localhost:3000/"+servicio.foto} alt="imagen yoga" className='serviciosCards__imagenes '/>
          

        </article>
      })}

    </section>




  )
}

export default Servicios

