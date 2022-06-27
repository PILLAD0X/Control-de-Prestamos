import React from 'react'
import { Button } from 'react-bootstrap';
import './FormsModal.css'
import * as FaIcons from 'react-icons/fa';
import SelectMarca from '../FormComponents/SelectMarca';
import Swal from 'sweetalert2';


const TablaModal = (props) => {
    // if(props.modalOpen === 'tequipo'){
    //     console.log('Tabla TEquipo')
    // }else if(props.modalOpen === 'marca'){
    //     console.log('Tabla marca')
    // }else{
    //     console.log('Tabla modelo')
    // }
    const eliminarTE = () =>{
        Swal.fire({
            title: 'Eliminar el Tipo de Equipo "Laptop"',
            text: "Seguro que deseas eliminar este Tipo de Equipo?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Tipo de Equipo Eliminado!',
                'El tipo de equipo fue eliminado exitosamente.',
                'success'
              )
            }
          })
    }
    const eliminarMarca = () =>{
        Swal.fire({
            title: 'Eliminar la marca"Dell"',
            text: "Seguro que deseas eliminar esta marca?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Marca eliminada!',
                'La marca fue eliminada exitosamente.',
                'success'
              )
            }
          })
    }
    const eliminarModelo = () =>{
        Swal.fire({
            title: 'Eliminar el modelo "Optiples 7090"',
            text: "Seguro que deseas eliminar este modelo?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Modelo eliminado!',
                'La modelo fue eliminado exitosamente.',
                'success'
              )
            }
          })
    }
  return (
    <div>
         {props.modalOpen === 'modelo'?
            <SelectMarca/>
            :
            ''
        }
        <div className="table-responsive centrar crollvertical">
        <table className='table table-hover table-xl table-striped '>
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    {
                        props.modalOpen === 'tequipo'?
                        <th>Tipo de Equipo</th>
                        :
                        props.modalOpen === 'marca'?
                        <th>Marcas</th>
                        :
                        props.modalOpen === 'modelo'?
                        <th>Modelos</th>
                        :
                        ''
                    }
                    <th>Acciones</th>
                </tr>
            </thead>
            {
                props.modalOpen === 'tequipo'?
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Laptop</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input'  onClick={() =>{eliminarTE();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Telefono Movil</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarTE();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Desktop</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarTE();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Workstation</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarTE();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Switch</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarTE();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Impresora</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarTE();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                    </tbody>
                :
                props.modalOpen === 'marca'?
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dell</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarMarca();}} ><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Apple</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarMarca();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Zebra</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarMarca();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Cisco</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarMarca();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Honeywell</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarMarca();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>HP</td>
                            <td>
                                <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarMarca();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                            </td>
                        </tr>
                    </tbody>
                :
                props.modalOpen === 'modelo'?
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Optiplex 7090</td>
                        <td>
                            <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarModelo();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone X</td>
                        <td>
                            <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarModelo();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ZT610</td>
                        <td>
                            <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarModelo();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Latitude 7490</td>
                        <td>
                            <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarModelo();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Optiplex 7090</td>
                        <td>
                            <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarModelo();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Precision 8094</td>
                        <td>
                            <Button variant="danger" className='' title='Eliminar' id='input' onClick={() =>{eliminarModelo();}}><FaIcons.FaTrash/></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="warning" className='' title='Editar' id='input'><FaIcons.FaPencilAlt/></Button>
                        </td>
                    </tr>
                    </tbody>
                :
                ''
            }

        </table>
        
    </div>
    
    </div>
  )
}

export default TablaModal
