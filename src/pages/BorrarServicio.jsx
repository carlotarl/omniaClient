import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API;

function BorrarServicio() {

    const navegar = useNavigate();

    const id = useParams().id;

    

    function handleNo() {
        navegar('/')
    }

    function handleSi() {
        let opciones = {
            method: 'DELETE'
        }

        fetch(API_URL+'/servicio?id='+id,opciones).then(res=> res.json()).then( data => {

        if (data.status == 'okay') {
            alert('Borrado satisfactoriamente');
            navegar('/');
        } else if(data.status == 'El campo no existe'){
            alert('El campo que intenta eliminar no existe, prueve con otro');
            navegar('/servicios')
        }

        })
    }

  return (
    
    <section className='borrarServicio'>
    
        <h1>¿Estás seguro de que quieres borrar la clase?</h1>

        <button type="button" onClick={handleSi}>Si</button>

        <button type="button" onClick={handleNo}>No</button>

    </section>
  )
}

export default BorrarServicio
