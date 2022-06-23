import React from 'react'
import Form from 'react-bootstrap/Form'

const SelectMarca = () => {
  return (
    <div>
        <Form.Select className="txtbx" name="TEquipo" defaultValue="0">
        <option key={0} value="0" disabled>
            Seleccione Marca
        </option>
        <option key={1} value="1" >
            DELL
        </option>
        <option key={2} value="2" >
            HP
        </option>
        <option key={3} value="3" >
            CISCO
        </option>
        <option key={4} value="4" >
            HONEYWELL
        </option>
        <option key={5} value="5" >
            ZEBRA
        </option>
        <option key={6} value="6" >
            Apple
        </option>
        </Form.Select>
  </div>
  )
}

export default SelectMarca
