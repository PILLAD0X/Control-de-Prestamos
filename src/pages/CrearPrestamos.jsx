import React from 'react'
import '../styles/CrearPrestamo.css'
import * as FaIcons from 'react-icons/fa';
import TablaEquipos from '../Components/TablaEquipos';

const CrearPrestamos = () => {
  return (
    <div>
      <div className="contenedor_titulo">
        <h1 className="titulo">Prestamos de Equipo</h1>
      </div>
      <div className='contenedor'>
        <div className="containerInput">
          <input 
            className='form-control inputBuscar'
            placeholder="Buscar Usuario"
          />
          <button className='btn btn-success'>
            <FaIcons.FaSearch />
          </button>
        </div>
      </div>
      <div className="divInfoUser">
        <div className='contenedorinfo'>
          <div className='divfotuser'><FaIcons.FaUser className='fotoUser'/></div>
          <div className='divcontenedorinfouser'>
            <div >
              <div className='divInfoUserText'>
                <div className='divsubT'>
                  <h4 className=''><FaIcons.FaUser/> Nombre:</h4>
                  <h4 className='labelinfo'>Pillado, Julio Cesar</h4>
                </div>
                <div className='divsubT'>
                  <h4 className=''><FaIcons.FaUser/> Usuario:</h4>
                  <h4 className='labelinfo'>JP1052000</h4>
                </div>
                <div className='divsubT'>
                  <h4 className=''><FaIcons.FaBuilding/> Departamento:</h4>
                  <h4 className='labelinfo'>MEIS</h4>
                </div>
                <div className='divsubT'>
                  <h4 className=''><FaIcons.FaAt/> Correo:</h4>
                  <h4 className='labelinfo'>Julio_cesar_Pillado@bose.com</h4>
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </div>
      <div className="contenedor_subTitulo">
        <h2><FaIcons.FaClock/> Historial de Prestamos</h2>
      </div>
      <TablaEquipos/>
    </div>
  )
}

export default CrearPrestamos
