import React from 'react'
import Form from 'react-bootstrap/Form'
const SelectModelo = () => {
  return (
    <Form.Select className="txtbx" name="modelo" defaultValue="0">
        <option key={0} value="0" disabled>
          Seleccione Modelo
        </option>
        <option key={1} value="1" >
          Optiplex 7470
        </option>
        <option key={2} value="2" >
          ZT610
        </option>
        <option key={3} value="3" >
          Latitude 5120
        </option>
        <option key={4} value="4" >
            Iphone 13 pro
        </option>
    </Form.Select>
  )
}

export default SelectModelo
