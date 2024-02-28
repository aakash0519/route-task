import React from 'react';

import { BrowserRouter as Router } from "react-router-dom"; 
 import {Link} from 'react-router-dom'; 
import { CustomRoute } from './CustomRoute';

export const Header =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto d-flex">
            <li className="nav-item active  d-flex">
           
                <Link className="nav-link"  to="/" >Home page</Link>
                <Link className="nav-link"  to="/about" >About page</Link>
                <Link className="nav-link" to="/contact">Contact Page</Link>
          
            </li>
           
           
          </ul>
          
        </div>
      </nav>
    )
}