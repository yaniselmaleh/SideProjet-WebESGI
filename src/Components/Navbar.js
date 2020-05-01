import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../images/nav-logo.svg";
import Cta from "./layout/Cta";
import "../Sass/Components/_navbar.scss";

const Navbar = () => {

    return (
        <nav className='navbar'>
            <ul>
                <li className='logo'><Logo/></li>
                <li className='items'>
                    <Cta className="filled-white" url="/test">Comment le Covid-19 se transmet</Cta>
                </li>
                <li className='items'>
                    <Cta className="filled-white" url="/test">Signes du Covid-19</Cta>
                </li>
                <li className='items'>
                    <Cta className="filled-white" url="/test">Gestes barrières</Cta>
                </li>
                <li className='items'>
                    <Cta className="filled-blue" url="/test">Faire un don</Cta>
                </li>
                <li className='bars'>
                    <i className='fas fa-bars'></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;