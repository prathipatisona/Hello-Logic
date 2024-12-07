import React from "react";
import logo from "./assets/logo.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
    return <header>
        <div className="header">
        <div>
            <h1>Hello Logic</h1>
            <img src={logo} alt="logo"/>
             </div>
        <NavLink to="/home">
         <button>HOME</button>
         </NavLink>
            
         <NavLink to="/about">
                <button>ABOUT</button>
                </NavLink>
            
                <NavLink to="/batches">
                <button>BATCHES</button>
                </NavLink>
            
                <NavLink to="/contact">
            <button>CONTACT</button>
            </NavLink>
            
            <NavLink to="/courses">
            <button>COURSES</button>
            </NavLink>
        </div>
        
    </header>
};

export default Header;