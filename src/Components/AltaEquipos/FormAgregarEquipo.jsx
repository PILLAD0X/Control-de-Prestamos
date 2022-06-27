import React, { useState } from "react";
import "./FormAgregarEquipo.css";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SelectTEquipo from "./FormComponents/SelectTEquipo";
import SelectMarca from "./FormComponents/SelectMarca";
import SelectModelo from "./FormComponents/SelectModelo";
import OpcModalPrinc from "./Modal/OpcModalPrinc";
import AddFormInput from "./FormComponents/AddFormInput";
const SelectAddEquipos = () => {
  const [verModalOpc, setVerModalOpc] = useState(false); //Estado del Modal
  const [modalAbierto, setModalAbierto] = useState("");

  const handleShowModalOpc = () => setVerModalOpc(true);

  const handleCloseOpc = () => {
    setVerModalOpc(false);
    setModalAbierto("");
  };

  const modalTEquipoOpc = () => {
    setModalAbierto("tequipo");
    handleShowModalOpc();
  };
  const modalMarcaOpc = () => {
    setModalAbierto("marca");
    handleShowModalOpc();
  };
  const modalModeloOpc = () => {
    setModalAbierto("modelo");
    handleShowModalOpc();
  };

  return (
    <div>
      <div>
        <Form>
          <div className="cajaSelects">
            <div className="espacio">
              <SelectTEquipo />
              <a className="label" onClick={modalTEquipoOpc}>
                Agregar Tipo:
              </a>
            </div>

            <div className="espacio">
              <SelectMarca />
              <a className="label" onClick={modalMarcaOpc}>
                Agregar Marca:
              </a>
            </div>

            <div className="espacio">
              <SelectModelo />
              <a className="label" onClick={modalModeloOpc}>
                Agregar Modelo:
              </a>
            </div>

            <div className="espacio">
              <AddFormInput
                inputForm={'serie'}
              />
              <h6 className="labelunable">.</h6>
            </div>
            <div className="espacio">
            <AddFormInput
                inputForm={'alias'}
              />
              <h6 className="labelunable">.</h6>
            </div>
          </div>
          <div className="divbtnadd">
            <Button type="submit" variant="success" title="Guardar Equipo">
              Guardar Equipo
            </Button>
          </div>
        </Form>
      </div>

      {/** MODAL PRINCIPAL CON ACCIONES*/}
      <Modal block="true" show={verModalOpc} onHide={handleCloseOpc}>
        {/**MODAL para las acciones de agregar opcciones a los select */}
        <Modal.Header closeButton>
          <Modal.Title>
            {modalAbierto === "tequipo"
              ? "Tipos de Equipo"
              : modalAbierto === "marca"
              ? "Marcas"
              : modalAbierto === "modelo"
              ? "Modelos"
              : ""
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OpcModalPrinc modalOpen={modalAbierto} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseOpc}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelectAddEquipos;
