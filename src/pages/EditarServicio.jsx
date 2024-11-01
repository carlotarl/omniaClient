// import React from 'react'
// import { useState,useEffect } from 'react'
// import { useParams,useNavigate } from 'react-router-dom'
// function EditarServicio() {

//     const [servicio,setServicio] = useState({});

//     const id = useParams().id;

//     useEffect(()=>{

//         fetch('http://localhost:3000/servicio/id?id='+id).then(res=>res.json()).then(data => {
//             console.log(data);
//         })

//     },[])

//   return (
//     <>

//     </>
//   )
// }

// export default EditarServicio








// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function EditarServicio() {
//     const navegar = useNavigate();
//     const { id } = useParams();
//     const [servicio, setServicio] = useState({ nombre: '', descripcion: '', duracion:'', precio:'' });

//     useEffect(() => {
//         fetch('http://localhost:3000/servicio/id?id='+id).then(res => res.json()).then(data => {
//                 if (data.status === 'okay') {
//                     setServicio(data.servicio);
//                 } else {
//                     alert('No se encontró el servicio');
//                     navegar('/');
//                 }
//             });
//     }, [id, navegar]);

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setServicio(prev => ({ ...prev, [name]: value }));
//     }

//     function handleNo() {
//         navegar('/');
//     }

//     function handleSi() {
//         let opciones = {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(servicio),
//         };

//         fetch(`'http://localhost:3000/servicio/id?id='+id`, opciones)
//             .then(res => res.json())
//             .then(data => {
//                 if (data.status === 'okay') {
//                     alert('Editado satisfactoriamente');
//                     navegar('/');
//                 } else {
//                     alert('Error al editar el servicio');
//                 }
//             });
//     }

//     return (
//         <section className='editarServicio'>
//             <h1>Editar Servicio</h1>
//             <input 
//                 type="text" 
//                 name="nombre" 
//                 value={servicio.nombre} 
//                 onChange={handleChange} 
//                 placeholder="Nombre del servicio" 
//             />
//             <textarea 
//                 name="descripcion" 
//                 value={servicio.descripcion} 
//                 onChange={handleChange} 
//                 placeholder="Descripción del servicio" 
//             />
//             <button type="button" onClick={handleSi}>Guardar Cambios</button>
//             <button type="button" onClick={handleNo}>Cancelar</button>
//         </section>
//     );
// }

// export default EditarServicio;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarServicio() {
  const [editarServicio, setEditarServicio] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    duracion: ''
  });

  const { id } = useParams();
  const navegar = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/servicio/id?id=' + id)
      .then(res => res.json())
      .then(data => {
        setEditarServicio(data);
      })
      .catch(err => console.error("Error al cargar el servicio:", err));
  }, [id]);

  function cambiarValor(e) {
    const { name, value } = e.target;
    setEditarServicio(prevState => ({ ...prevState, [name]: value }));
  }

  function editarCampo(e) {
    e.preventDefault();
    const opciones = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editarServicio)
    };

    fetch('http://localhost:3000/servicio/id?id=' + id, opciones)
      .then(res => res.json())
      .then(data => {
        if (data.mensaje === 'Ok') {
          navegar('/');
        }
      })
      .catch(err => console.error("Error al editar el servicio:", err));
  }

  return (
    <section className='editarSeccion'>
      <form onSubmit={editarCampo} className='formularioNuevo'>
        <label htmlFor="nom">Nombre:</label>
        <input
          type="text"
          name='nombre'
          id='nom'
          value={editarServicio.nombre}
          onChange={cambiarValor}
        />

        <label htmlFor="desc">Descripción:</label>
        <textarea
          name='descripcion'
          id='desc'
          value={editarServicio.descripcion}
          onChange={cambiarValor}
        ></textarea>

        <label htmlFor="dur">Duración:</label>
        <input
          type="number"
          name='duracion'
          id='dur'
          value={editarServicio.duracion}
          onChange={cambiarValor}
        />

        <label htmlFor="pre">Precio:</label>
        <input
          type="number"
          name='precio'
          id='pre'
          value={editarServicio.precio}
          onChange={cambiarValor}
        />



        <input type="submit" value="Editar" />
      </form>
    </section>
  );
}

export default EditarServicio;


