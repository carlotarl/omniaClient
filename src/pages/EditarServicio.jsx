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
    fetch('/servicio/id?id=' + id)
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

    fetch('/servicio/id?id=' + id, opciones)
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



