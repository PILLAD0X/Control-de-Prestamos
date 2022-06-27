import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../styles/TablaEquipos.css";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import FormEditEquipo from "./AltaEquipos/Modal/FormEditEquipo";
const TablaEquipos = () => {
  const [verModalOpc, setVerModalOpc] = useState(false); //Estado inicial del Modal para que no sea visible
  const handleShowModalOpc = () => setVerModalOpc(true); // cambiamos el modal a visible.
  const handleCloseOpc = () => {
    //funcion para cerrar el modal al seleccionar cerrar.
    setVerModalOpc(false);
  };
  const handleShowModal = () => {
    handleShowModalOpc();
  };
  return (
    <div>
      <div className="table-responsive centrar">
            <table className="table table-hover table-sm table-striped ">
                <thead className="table-dark">
                    <tr>
                    <th>#</th>
                    <th>Serie</th>
                    <th>Alias</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>12AA213</td>
                    <td>TJPC123</td>
                    <td>DELL</td>
                    <td>Latitude 7470</td>
                    <td>Disponible</td>
                    <td>
                        <Button
                        variant="warning"
                        className=""
                        title="Editar"
                        id="input"
                        onClick={handleShowModal}
                        >
                        <FaIcons.FaPencilAlt />
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                        variant="primary"
                        className=""
                        title="Imprimir Etiqueta"
                        id="input"
                        >
                        <FaIcons.FaPrint />
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>12AA213</td>
                    <td>TJPC123</td>
                    <td>DELL</td>
                    <td>Latitude 7470</td>
                    <td>Disponible</td>
                    <td>
                        <Button
                        variant="warning"
                        className=""
                        title="Editar"
                        id="input"
                        onClick={handleShowModal}
                        >
                        <FaIcons.FaPencilAlt />
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                        variant="primary"
                        className=""
                        title="Imprimir Etiqueta"
                        id="input"
                        >
                        <FaIcons.FaPrint />
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>12AA213</td>
                    <td>TJPC123</td>
                    <td>DELL</td>
                    <td>Latitude 7470</td>
                    <td>Disponible</td>
                    <td>
                        <Button
                        variant="warning"
                        className=""
                        title="Editar"
                        id="input"
                        onClick={handleShowModal}
                        >
                        <FaIcons.FaPencilAlt />
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                        variant="primary"
                        className=""
                        title="Imprimir Etiqueta"
                        id="input"
                        >
                        <FaIcons.FaPrint />
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>12AA213</td>
                    <td>TJPC123</td>
                    <td>DELL</td>
                    <td>Latitude 7470</td>
                    <td>Disponible</td>
                    <td>
                        <Button
                        variant="warning"
                        className=""
                        title="Editar"
                        id="input"
                        onClick={handleShowModal}
                        >
                        <FaIcons.FaPencilAlt />
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                        variant="primary"
                        className=""
                        title="Imprimir Etiqueta"
                        id="input"
                        >
                        <FaIcons.FaPrint />
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>12AA213</td>
                    <td>TJPC123</td>
                    <td>DELL</td>
                    <td>Latitude 7470</td>
                    <td>Disponible</td>
                    <td>
                        <Button
                        variant="warning"
                        className=""
                        title="Editar"
                        id="input"
                        onClick={handleShowModal}
                        >
                        <FaIcons.FaPencilAlt />
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                        variant="primary"
                        className=""
                        title="Imprimir Etiqueta"
                        id="input"
                        >
                        <FaIcons.FaPrint />
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>12AA213</td>
                    <td>TJPC123</td>
                    <td>DELL</td>
                    <td>Latitude 7470</td>
                    <td>Disponible</td>
                    <td>
                        <Button
                        variant="warning"
                        className=""
                        title="Editar"
                        id="input"
                        onClick={handleShowModal}
                        >
                        <FaIcons.FaPencilAlt />
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                        variant="primary"
                        className=""
                        title="Imprimir Etiqueta"
                        id="input"
                        >
                        <FaIcons.FaPrint />
                        </Button>
                    </td>
                    </tr>
                </tbody>
            </table>
        <div />
        <Modal block="true" show={verModalOpc} onHide={handleCloseOpc}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Equipo TJPC####</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormEditEquipo />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseOpc}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default TablaEquipos;
