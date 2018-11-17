import React from 'react';
import pawPrint from './paw-print.png';

import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-light">
          <div>
            <div   className="navbar-brand">
              <h1 style = {{color:'black'}}>
            <img src= {pawPrint} height={'75px'} width= {'75px'}/>
               {'VetDetect'} 
              </h1> 
            </div>
          </div>
        </nav>
      );
    }
  }
  
  export default Header;