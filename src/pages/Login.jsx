import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useUser } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [datos, setDatos] = useState({nombre: '',contrasena: '', error:''})

  const linkAdmin = import.meta.env.VITE_API_ADMIN;

  const navegador = useNavigate();

  const {login} = useUser();

  
  function cambiarDatos(e) {
    let valor = e.target.value;
    let nombreCampo = e.target.name;

    setDatos({ ...datos, [nombreCampo]:valor })
  }

  function enviarForm(e) {

    e.preventDefault();

    axios.get(linkAdmin+'?nombre='+datos.nombre+'&contrasena='+datos.contrasena).then(response=>{


      if (response.data.length > 0) {
        login(response.data[0])
        navegador('/servicios')
      }else{
        setDatos({...datos,error:'Usuario no encontrado'})

      }
    })
  }


  return (
    <section className='login'>

      <p>{datos.error}</p>

      <form action="#" method='get' onSubmit={enviarForm} className='formulario'>

        <label htmlFor="nom">Nombre de usuario:</label>
        <input type="text" name='nombre' id="nom" onChange={cambiarDatos} />



        <label htmlFor="pass">Contraseña:</label>
        <input type="password" name='contrasena' id="pass" onChange={cambiarDatos} />



        <input type="submit" value="Iniciar Sesion" className='botonSesion' />
      </form>


    </section>
  )
}

export default Login

 