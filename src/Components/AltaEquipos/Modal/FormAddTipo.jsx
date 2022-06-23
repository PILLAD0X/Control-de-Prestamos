import { Button } from "react-bootstrap";
import React from 'react'
import Form from 'react-bootstrap/Form'
import './FormsModal.css'
const FormAddTipo = () => {
  return (

    <div className="flex-column">
        <Form>
            <div>        
                <Form.Control
                    type="text"
                    placeholder="Ingrese Nuevo Tipo"
                    required
                />
            </div>
            <div className="espacioVertical">
                <Button  variant="success" type="submit" style={{margin: 'auto'}} >Agregar Tipo</Button>
            </div>
        </Form>

            
       
    </div>
  )
}

export default FormAddTipo;
