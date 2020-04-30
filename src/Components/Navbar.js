import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../images/nav-logo.svg";
import Cta from "./layout/Cta";
import "../Sass/Components/_navbar.scss";

const Navbar = () => {

    return (
        <nav className='navbar'>
            <Logo />
            <div className="navbar__content">
                <Link to="/test" className='navbar__link'>Comment le Covid-19 se transmet</Link>
                <Link to="/test" className='navbar__link'>Signes du Covid-19</Link>
                <Link to="/test" className='navbar__link'>Gestes barrières</Link>
                <Cta className="filled-blue">Faire un don </Cta>
            </div>
        </nav>
    )
}

export default Navbar;