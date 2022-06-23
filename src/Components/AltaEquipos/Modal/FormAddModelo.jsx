import { Button } from "react-bootstrap";
import React from 'react'
import Form from 'react-bootstrap/Form'
import './FormsModal.css'
import SelectTEquipo from '../Selects/SelectTEquipo'
import SelectMarca from '../Selects/SelectMarca'
const FormAddModelo = () => {
  return (

    <div className="flex-column">
       <Form>
            <div>
                <SelectMarca/>
            </div>
            <div className="espacioVertical">
                <SelectTEquipo/> 
            </div>
            <div className='espacioVertical'>
                <Form.Control
                    type="text"
                    placeholder="Ingrese Nuevo Modelo"
                    required
                />
            </div>
            <div className="espacioVertical">
                <Button  variant="success" type="submit" style={{margin: 'auto'}} >Agregar Modelo</Button>
            </div>
       </Form>


            
       
    </div>
  )
}

export default FormAddModelo;
