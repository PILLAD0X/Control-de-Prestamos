import React from 'react'
import * as FaIcons from 'react-icons/fa';
import '../styles/BuscarEquipo.css'
import TablaEquipos from '../Components/TablaEquipos'
const BuscarEquipo = () => {
  return (
    <div>
      <div className="contenedor_titulo">
        <h1 className="titulo">Busqueda de Equipos</h1>
      </div>
      <div className='contenedor'>
        <div className="containerInput">
          <input 
            className='form-control inputBuscar'
            placeholder="Ingrese Serie o Alias"
          />
          <button className='btn btn-success'>
            <FaIcons.FaSearch />
          </button>
        </div>
      </div>
    <div>
      <TablaEquipos/>
    </div>
    </div>
  )
}

export default BuscarEquipo
