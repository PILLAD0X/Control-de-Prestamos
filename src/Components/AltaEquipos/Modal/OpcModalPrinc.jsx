import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import FormAddTipo from './FormAddTipo'
import FormAddMarca from './FormAddMarca'
import FormAddModelo from "./FormAddModelo";
import FormModificarOpcciones from './TablaModal'
const OpcModalPrinc = (props) => {
    const [modalAbierto, setModalAbierto] = useState('');
    const [verModalAdd, setVerModalAdd] = useState(false); //Estado del Modal
    const [opcSeleccionada, setOpcSeleccionada] = useState('');
    
    const handleCloseAdd = () => {
        setVerModalAdd(false);
        setModalAbierto('');
    };
    const handleOpcSelecBuscar = () =>{
      setOpcSeleccionada('buscar');
      setModalAbierto(props.modalOpen);
      setVerModalAdd(true);
    }
    const handleOpcSelecAgregar = () =>{
      setOpcSeleccionada('agregar');
      setModalAbierto(props.modalOpen);
      setVerModalAdd(true);
    }


  return (
    <div className='formulario_AgregarEquipo'>
      <Button onClick={handleOpcSelecBuscar} title="Buscar"> Buscar <FaIcons.FaSearch/></Button>&nbsp;&nbsp;&nbsp;
      <Button onClick={handleOpcSelecAgregar} title="Agregar"> Agregar <FaIcons.FaPlus/></Button>
      <>
      <Modal block="true" show={verModalAdd} onHide={handleCloseAdd}>{/**MODAL para las acciones de agregar opcciones a los select */}
        <Modal.Header closeButton>
          <Modal.Title >
            {modalAbierto === 'tequipo' && opcSeleccionada === 'agregar'?
              "Agregar Nuevo Tipo de Equipo":
              modalAbierto === 'marca' && opcSeleccionada === 'agregar'?
              "Agregar Nueva Marca":
              modalAbierto === 'modelo' && opcSeleccionada === 'agregar'?
              "Modelos":
              modalAbierto === 'tequipo' && opcSeleccionada ==='buscar'?
              'Tipos de Equipo':
              modalAbierto === 'marca' && opcSeleccionada ==='buscar'?
              'Marcas':
              modalAbierto === 'modelo' && opcSeleccionada ==='buscar'?
              'Modelos':
              ''
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalAbierto === 'tequipo' && opcSeleccionada ==='agregar'?
            <FormAddTipo />:
            modalAbierto === 'marca' && opcSeleccionada ==='agregar'?
            <FormAddMarca/>:
            modalAbierto === 'modelo' && opcSeleccionada ==='agregar'?
            <FormAddModelo/>:
            opcSeleccionada ==='buscar'?
            <FormModificarOpcciones modalOpen={props.modalOpen}/>:
            ''
          }
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    </div>
    
  )
}

export default OpcModalPrinc
