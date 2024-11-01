import React from 'react'

function QuienesSomos() {
  return (
    <section className='team'>

      <article className='team__card'>
        <img src="profe1.jpg" alt="profesora" className='team__imagen' />
        <div className='contenedor__texto'>
          <h2 className='team__titulo'>Elena Ramirez</h2>
          <p className='team__texto'>
            Osteópata <br />
            Proferora titulada de yoga <br />
            Especialista en yoga terapéutico <br />
          </p>
        </div>
      </article>

      <article className='team__card'>
        <img src="profe4.jpg" alt="profesora" className='team__imagen' />
        <div className='contenedor__texto'>
          <h2 className='team__titulo'>María López</h2>
          <p className='team__texto'>
            Fisioterapeuta <br />
            Profesora titulada de yoga <br />
            Especialista en bienestar muscular <br />
          </p>
        </div>
      </article>

    </section>
  );
}

export default QuienesSomos