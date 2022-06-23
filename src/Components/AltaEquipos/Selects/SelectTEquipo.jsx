import React from 'react'
import Form from 'react-bootstrap/Form'
const SelectTEquipo = () => {
  return (
    
    <Form.Select className="txtbx" defaultValue="0">
        <option key={0} value="0" disabled>
        Tipo de Equipo
        </option>
        <option key={1} value="1" >
          Desktop
        </option>
        <option key={2} value="2" >
          Laptop
        </option>
        <option key={3} value="3" >
          Impresora
        </option>
        <option key={4} value="1" >
            Telefono Movil
        </option>
        <option key={5} value="1" >
            Switch
        </option>
    </Form.Select>
    
  )
}

export default SelectTEquipo
