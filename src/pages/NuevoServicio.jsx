import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API;

function NuevoServicio() {
    const [nuevoServicio,setNuevoServicio] = useState( {nombre:'',descripcion:'',precio:0} );
    const navigate = useNavigate();

    function cambiarCampo(e) {
        let nombreCampo = e.target.name;
        let valorCampo = e.target.value;
        setNuevoServicio({...nuevoServicio, [nombreCampo]: valorCampo})
    }

    function enviarFormulario(e) {
        e.preventDefault();
        console.log(nuevaGuia);
        let opciones = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaGuia)
        };
        console.log(opciones);
        fetch(API_URL+'/servicios',opciones).then(res => res.json()).then(data=>{
            if (data.mensaje == 'Ok') {
                navigate('/');
            }
        })
    }

  return (
    <section className='nuevoServicio'>
        <form action="#" method="post" onSubmit={enviarFormulario} className='formularioNuevo'>
            <label htmlFor="Nom">Nombre: </label>
            <input type="text" name="nombre" id="Nom" onChange={cambiarCampo}/>

            <label htmlFor="desc">Descripción: </label>
            <textarea name="descripcion" id="desc" cols="30"  onChange={cambiarCampo}></textarea>

            <label htmlFor="Dur">Duración: </label>
            <input type="text" name="duracion" id="Dur" onChange={cambiarCampo}/>

            <label htmlFor="pre">Precio:</label>
            <input type="number" name="precio" id="pre" onChange={cambiarCampo}/>

            <input type="submit" value="Crear" />
        </form>
    </section>
  )
}

export default NuevoServicio