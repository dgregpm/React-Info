import React from "react";
import logo from '../logo.svg';

function Navbar() {
    return (
        <nav className='nav--container'>
            <img className='nav--logo' src={logo}/>
            <h3 className='nav--title'>ReactFacts</h3>
            <h4 className="nav--items">React Course - Project 1</h4>
        </nav>
    );
}

export default Navbar;