/* eslint-disable react/jsx-no-undef */
import React, {useState} from "react";
import "../styles/AgregarEquipo.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectEquipos from "../Components/AltaEquipos/FormAgregarEquipo";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
const AgregarEquipo = () => {


  return (
    <div>
      <div className="contenedor_titulo">
        <h1 className="titulo">Agregar Equipos</h1>
      </div>

      <div className="contenedor_principal">
          <Form>
          <div className="formulario_AgregarEquipo">
          <div className="contenedor2">
            <SelectEquipos
              name="modelo"
            />
          </div>
          <div className="contenedor1">
            <Form.Control
              type="text"
              name="serie"
              placeholder=" Serie del equipo"
              className="inputform"
              required
            />
          </div>
          <div className="contenedor1">
            <Form.Control
              type="text"
              name="alias"
              placeholder=" Alias del equipo"
              className="inputform "
              required
            />
          </div>

        </div>
          
        <div className='divbtnadd'>

          <Button type="submit" variant="success">Guardar Equipo</Button>
         
        </div>
          </Form>


      </div>

    </div>
   
  );
};

export default AgregarEquipo;
