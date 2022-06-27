import React from 'react'
import Form from "react-bootstrap/Form";
import "../FormAgregarEquipo.css";
const AddFormInput = (props) => {
  return (
    <>
        {
            props.inputForm === 'serie'?
                <Form.Control
                    type="text"
                    name="serie"
                    placeholder=" Serie del equipo"
                    className=" input"
                    required
                />:
            props.inputForm === 'alias'?
                <Form.Control
                    type="text"
                    name="alias"
                    placeholder=" Alias del equipo"
                    className=" input"
                    required
                />:
            ''
        }
    </>
  )
}

export default AddFormInput
