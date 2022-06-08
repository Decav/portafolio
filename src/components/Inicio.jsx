import React from 'react'

const Inicio = () => {
  return (
    <div className='container mt-5'>
      <div class="row justify-content-center">
        
        <div class="col-10" >
          <div className='contenedor' style={{"height": "80%", "width":"60%"}}>
            <div className='bg-light bg-opacity-25 card shadow text-light'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-12 col-md-12 col-lg-6'>
                    <img style={{"height": "auto","width": "90%" }} src="https://cdn.discordapp.com/attachments/729827578784776232/982838194083090473/unknown.png" alt="" />
                  </div>
                  <div className="col">
                    <h1 className='display-4 mt-3'>Diego Alfredo Canelo Vigny</h1>
                    <hr />
                    <h2 className='display-6'>Contacto</h2>
                    <p>Celular: +569 9305 7393</p>
                    <p>Email personal: canelovigny@gmail.com</p>
                    <p>Email corporativo: dcanelo@acl.cl</p>
                    <p>Linkedin: <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/diego-canelo-vigny-2628aa230" className='link-light'>Diego Canelo Vigny</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-light bg-opacity-25 card shadow text-light mt-2'>
              <div className='card-body'>
                <h2 className='display-6'>Estudios</h2>
                <hr />
                <div className='ms-3'>
                  <h4>Técnico universitario en informática</h4>
                  <h6 className='ms-5'>Universidad Técnica Federico Santa María</h6>
                  <h4>Técnico nivel medio en electrónica</h4>
                  <h6 className='ms-5'>Colegio Diego echeverria castro</h6>
                </div> 
              </div>
            </div>
            <div className='bg-light bg-opacity-25 card shadow text-light mt-2'>
              <div className='card-body'>
                <h2 className='display-6'>Experiencia laboral</h2>
                <hr />
                <div className='ms-3'>
                  <h5>Práctica profesional de la carrera técnico universitario en informática en el programa PPJ área de desarrollo</h5>
                  <h6 className='ms-5'>Empresa: ACL Tecnologías</h6>
                  <h6 className='ms-5'>Función: Programador trainee</h6>
                  <h6 className='ms-5'>Duración: Enero 2022 - Actualidad</h6>
                  <h5 className='mt-4'>Práctica profesional de técnico nivel medio en electrónica trabajando en detección de fallas en elementos del hardware</h5>
                  <h6 className='ms-5'>Empresa: B2K Computación</h6>
                  <h6 className='ms-5'>Función: revisión y mantención de Hardware</h6>
                  <h6 className='ms-5'>Duración: Diciembre 2019 - Febrero 2020</h6>
                  <h5 className='mt-4'>Trabajo media jornada en supermercado como empaque</h5>
                  <h6 className='ms-5'>Empresa: Santa Isabel</h6>
                  <h6 className='ms-5'>Función: Empaquetador</h6>
                  <h6 className='ms-5'>Duración: Julio 2018 - Julio 2019</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Inicio