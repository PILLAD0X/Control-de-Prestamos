import { Button } from "react-bootstrap";
import React from 'react'
import Form from 'react-bootstrap/Form'
import './FormsModal.css'
const FormAddTipo = () => {
  return (
    <Form>
      <div className="flex-column">
        
        <div>    
            <Form.Control
              type="text"
              placeholder="Ingrese Nueva Marca"
              required
            />
        </div>
        <div className="espacioVertical">
          <Button  variant="success" type="submit" style={{margin: 'auto'}} >Agregar Marca</Button>
        </div>
   </div>

    </Form>

  )
}

export default FormAddTipo;
