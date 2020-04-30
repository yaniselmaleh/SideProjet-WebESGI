import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../images/nav-logo.svg";
import Cta from "./Cta";

const Navbar = () => {

    return (
        <nav className='navbar'>
            <Logo />
            <Link to="/test">Comment le Covid-19 se transmet</Link>
            <Link to="/test">Signes du Covid-19</Link>
            <Link to="/test">Gestes barrières</Link>
            <Cta className="filled-blue">Faire un don </Cta>
        </nav>
    )
}

export default Navbar;