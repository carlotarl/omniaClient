import React from 'react'
import { useUser } from '../context/UsuarioContext'
import { Navigate } from 'react-router-dom';

function RutaPrivada({componente}) {

    const {usuario} = useUser();

  return (
    <>
    
        {usuario == null ?

        <Navigate to={'/login'}/>

        :

        componente
    }


    
    </>
  )
}

export default RutaPrivada