// Aquí guardamos el contexto para que toda la aplicaión pueda usar el usuario, y utilizamos el localstorage para mantener iniciada la sesión

import React,{ useState,useContext,createContext } from "react";

const UsuarioContext = createContext();

export const useUser = () => {

    return useContext(UsuarioContext);
    
}

export const UserProvider = ({children})=>{


    const [usuario,setUsuario] = useState(
        
        localStorage.getItem('usu') == null?

        null :

        localStorage.getItem('usu')

    );

    function login(datosUsu){

        localStorage.setItem('usu',datosUsu);

        setUsuario(datosUsu)

    }


    function logout(){
        localStorage.removeItem('usu');
        setUsuario(null)
    }


    return <UsuarioContext.Provider value={{usuario,login,logout}}>

        {children}
        
    </UsuarioContext.Provider>

}


export default UsuarioContext;