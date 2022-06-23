import React,{useState} from "react";
import "./SelectAddEquipos.css";
import { Modal, Button} from 'react-bootstrap';
import FormAddTipo from './Modal/FormAddTipo'
import FormAddMarca from './Modal/FormAddMarca'
import FormAddModelo from "./Modal/FormAddModelo";
import SelectTEquipo from './Selects/SelectTEquipo'
import SelectMarca from './Selects/SelectMarca'
import SelectModelo from './Selects/SelectModelo'

const SelectAddEquipos = () => {
  const [verModal, setVerModal] = useState(false); //Estado del Modal
  const [modalAbierto, setModalAbierto] = useState('');
  const handleShow = () => setVerModal(true);
  const handleClose = () => {
    setVerModal(false)
    setModalAbierto('');
  };
  const modalTEquipo = () =>{
    setModalAbierto('tequipo');
    handleShow();
  }
  const modalMarca = () =>{
    setModalAbierto('marca');
    handleShow();
  }
  const modalModelo = () =>{
    setModalAbierto('modelo');
    handleShow();
  }

  return (
    <div className="cajaSelects">
      <div className='espacio'>
        <SelectTEquipo/>
 
        <a className="label" onClick={modalTEquipo}>Agregar Tipo:</a>
      </div>

      <div className='espacio'>
        <SelectMarca/>
        <a className="label" onClick={modalMarca}>Agregar Marca:</a>
      </div>

      <div className='espacio'>
        <SelectModelo/>
        <a className="label" onClick={modalModelo}>Agregar Modelo:</a>
      </div>
      <Modal block="true" show={verModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >
            {modalAbierto === 'tequipo'?
              "Agregar Nuevo Tipo de Equipo":
              modalAbierto === 'marca' ?
              "Agregar Nueva Marca":
              modalAbierto === 'modelo'?
              "Agregar Nuevo Modelo":
              ''
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalAbierto === 'tequipo'?
            <FormAddTipo />:
              modalAbierto === 'marca' ?
              <FormAddMarca/>:
              modalAbierto === 'modelo'?
              <FormAddModelo/>:
              ''
          }
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelectAddEquipos;
