/* eslint-disable react/jsx-no-undef */
import React, {useState} from "react";
import "../styles/AgregarEquipo.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import FomAgregarEquipos from "../Components/AltaEquipos/FormAgregarEquipo";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import TablaEquipos from "../Components/TablaEquipos";
const AgregarEquipo = () => {


  return (
    <div>
      <div className="contenedor_titulo">
        <h1 className="titulo">Agregar Equipos</h1>
      </div>

      <div className="contenedor_principal">

          <div className="formulario_AgregarEquipo">
            <div className="contenedor2">
              <FomAgregarEquipos
                name="modelo"
              />
            </div>
        </div>


      </div>
      <div>
        <h3 className="titulotabla">Agregados Recientemente:</h3>
        <TablaEquipos/>
      </div>
    </div>
   
  );
};

export default AgregarEquipo;
