import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';
export const Sidebardata = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cIcon: 'fa fa-2x',
    cName: 'nav-text'
  },
  {
    title: 'Conocimientos',
    path: '/conocimientos',
    icon: <FaIcons.FaBookReader/>,
    cIcon: 'fa fa-2x',
    cName: 'nav-text'
  },
  {
    title: 'Proyectos destacados',
    path: '/proyectos',
    icon: <GoIcons.GoFileDirectory />,
    cIcon: 'fa fa-2x',
    cName: 'nav-text'
  },


  
];