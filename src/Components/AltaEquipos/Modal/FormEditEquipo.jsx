import React from 'react'
import { Button } from 'react-bootstrap'
import AddFormInput from '../FormComponents/AddFormInput'
import SelectMarca from '../FormComponents/SelectMarca'
import SelectModelo from '../FormComponents/SelectModelo'
import SelectTEquipo from '../FormComponents/SelectTEquipo'
import './FormsModal.css'
const FormEditEquipo = () => {
  return (
    <div>
        <div className="espacioVertical">
            <SelectTEquipo/> 
        </div>
        <div className="spacetop">
            <SelectMarca/>
        </div>
        <div className="espacioVertical">
            <SelectModelo/>
        </div>
        <div className="espacioVertical">
            <AddFormInput
                inputForm={'serie'}
            />   
        </div>
        <div className="espacioVertical">
            <AddFormInput
                inputForm={'alias'}
            />
        </div>
        <div className="espacioVertical">
            <Button variant="primary" >Guardar Cambios</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="danger" >Cancelar</Button>
        </div>
    </div>
  )
}

export default FormEditEquipo
