import React from 'react'
import { useEffect, useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const API_URL = import.meta.env.VITE_API;
console.log('API_URL', API_URL)

function PanelDeControl() {

    const [servicios, setServicios] = useState([]);

    useEffect(() => {

        fetch(`${API_URL}/servicios`).then(res => res.json())
            .then(datos => {
                setServicios(datos)
            })

    }, []);



    return (

        <section className='serviciosCrud'>

            {servicios.map(servicio => {

                return <div key={servicio.id}>

                    <h2>{servicio.nombre}</h2>
                    <p>{servicio.descripcion}</p>
                    <p>{servicio.duracion}</p>
                    <p>{servicio.precio}</p>


                    <div className='botones'>
                        <Link to={'/borrarServicio/' + servicio.id}><FaTrashAlt /></Link>
                        <Link to={'/EditarServicio/' + servicio.id}><MdModeEditOutline/></Link>  
                    </div>



                </div>



            })}

            <div className='nueva'>Añadir nueva clase: 
                <div className='botones'>
                    <Link to={'/nuevoServicio'}><FaRegPlusSquare /></Link>
                </div>
            </div>



        </section>

    )

}



export default PanelDeControl 


