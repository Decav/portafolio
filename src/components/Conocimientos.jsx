import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import { ConocimientoContent } from './ConocimientoContent';
const Conocimientos = () => {
  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className='contenedor' style={{"height": "700px", "width":"40%"}} >
            <div className='table-responsive bg-light bg-opacity-25 card shadow text-light'>
              <h4 className='display-6 m-3'>Conocimientos</h4>
              <table className='table table-bordered'>
                <thead>
                  <tr className='text-light'>
                    <th>Lenguajes</th>
                    <th>Frameworks</th>
                    <th>Bibliotecas</th>
                    <th>Base-datos</th>
                  </tr>
                </thead>
                <tbody>
                  {ConocimientoContent.map((item, index) => {
                  return (
                    <tr key={index} className='text-light'>
                      <th>{item.Lenguajes} {item.LenguajesIcon}</th>
                      <th>{item.Frameworks}  {item.FrameworksIcon}</th>
                      <th>{item.Bibliotecas}  {item.BibliotecasIcon}</th>
                      <th>{item.BaseDatos}  {item.BaseDatosIcon}</th>
                    </tr>
                  )
                })}    
                </tbody>
                
                <tbody>
                <h4 className='text-light display-6 m-3'>Otros</h4>
                  <tr className='text-light'>
                    <th>Git <DiIcons.DiGit/></th>
                    <th>Github <FaIcons.FaGithub/></th>
                    <th>Node <FaIcons.FaNodeJs/></th>
                    <th>Android Studio <SiIcons.SiAndroidstudio/></th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='table-responsive bg-light bg-opacity-25 card shadow text-light mt-4'>
              <h4 className='display-6 m-3'>Herramientas utilizadas</h4>
              <table className='table table-bordered'>
                <thead>
                  <tr className='text-light'>
                    <th>Editor de codigo</th>
                    <th>Aplicaciones</th>
                    <th>Testing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-light'>
                    <th>Visual Studio code <SiIcons.SiVisualstudiocode/></th>
                    <th>Xampp <SiIcons.SiXampp/></th>
                    <th>PostMan <SiIcons.SiPostman/></th>
                  </tr>
                  <tr className='text-light'>
                    <th>Visual Studio <SiIcons.SiVisualstudio/></th>
                    <th>GameMakerStudio 2 <FaIcons.FaFantasyFlightGames/></th>
                    <th>Karate</th>
                  </tr>
                  <tr className='text-light'>
                    <th>IntelliJ <SiIcons.SiIntellijidea/></th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr className='text-light'>
                    <th>NetBeans <DiIcons.DiNetbeans/></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conocimientos