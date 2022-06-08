import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebardata } from './Sidebardata';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
  return (
    <>
      <div class="area"></div>
      <nav class="main-menu">
            <ul>
                <li>
                    <div className=''>
                        <i className='fa fa-2x'> <img src="acl_logo.png" alt="" style={{"width": "35px"}} /></i>
                        <span className='nav-text'>
                            Diego Canelo Vigny
                        </span>
                    </div>       
                </li>
                {Sidebardata.map((item, index) => {
                  return (
                    <li key={index}>  
                        <Link to={item.path}>
                            <div>  
                                <i className={item.cIcon}>{item.icon}</i> 
                                <span className={item.cName}>{item.title}</span>
                            </div> 
                        </Link>
                    </li>
                  )
                })}
                <li>
                  <a target={"_blank"} rel="noreferrer" href="https://github.com/Decav?tab=repositories">
                    <div>
                      
                      <i className='fa fa-2x'><FaIcons.FaGithub/></i>
                      <span className='nav-text'>Repositorio github</span>
                    </div>
                  </a>
                </li>
            </ul>
        </nav>
    </>
  );
}

export default Sidebar;