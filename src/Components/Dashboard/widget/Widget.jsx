import React from 'react'
import './Widget.css'
import * as FaIcons from 'react-icons/fa';
const Widget = (props) => {
    let data;

    switch(props.type){
        case "Laptop":
            data = {
                title: "Laptops.",
                link: "Ver Mas",
                icon: (
                    <FaIcons.FaLaptop className='icon' style={{
                        color:"#0275d8"
                    }}/>
                )
            }
        break;

        case "Desktop":
            data = {
                title: "Desktops.",
                link: "Ver Mas",
                icon: (
                    <FaIcons.FaDesktop className='icon' style={{
                        color:"#0275d8"
                    }}/>
                )
            }
        break;

        case "Workstation":
            data = {
                title: "Workstations.",
                link: "Ver Mas",
                icon: (
                    <FaIcons.FaServer className='icon' style={{
                        color:"#0275d8"
                    }}/>
                )
            }
        break;

        case "EquiposComputo":
            data = {
                title: "Total de Equipos de Computo. ",
                link: "Ver Mas",
                icon: (''
                )
            }
        break;

        default:
        break;
    }

  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{props.cantidad}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="righ">
        <div className="porcentage">{props.porcentaje} %</div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
