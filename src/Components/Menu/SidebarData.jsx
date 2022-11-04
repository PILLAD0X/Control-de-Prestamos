import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />

    
  },
  {
    title: 'Equipos',
    path: '#',
    icon: <BiIcons.BiDesktop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Agregar Equipo',
        path: '/agregarequipo',
        icon: <IoIcons.IoMdAdd />,
        cName: 'sub-nav'
      },
      {
        title: 'Buscar equipo',
        path: '/buscarequipo',
        icon: <FaIcons.FaSearch />,
        cName: 'sub-nav'
      },
      {
        title: 'Baja de equipo',
        path: '/eliminarequipo',
        icon: <AiIcons.AiTwotoneDelete />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Prestamos',
    path: '#',
    icon: <AiIcons.AiFillClockCircle />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Nuevo Prestamo',
        path: '/nuevoprestamo',
        icon: <FaIcons.FaHandHolding />
      },
      {
        title: 'Devolucion de Prestamo',
        path: '/devolucionequipo',
        icon: <FaIcons.FaHandshake />
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
