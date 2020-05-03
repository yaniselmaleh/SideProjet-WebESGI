import React from "react";

import { Link } from 'react-scroll'

import {ReactComponent as Logo} from "../images/nav-logo.svg";
import {ReactComponent as BurgerMenu} from "../images/burgermenu.svg";
import Cta from "./layout/Cta";
import "../Sass/Components/_navbar.scss";
import "../Sass/Components/_cta.scss";

const Navbar = () => {

    const toggleNavbar = () => {
        const items = Array.from(document.querySelectorAll('.navbar__item'));
        items.forEach(item => item.classList.contains('show') ? item.classList.remove('show') : item.classList.add('show'));
    }

    return (
        <nav className='navbar'>
            <ul>
                <li className='navbar__logo'>
                    {/* <Cta url={window.location.origin}>
                        <Logo/>
                    </Cta> */}
                    <Link className="cta-filled-white" to="home" spy={true} smooth={true} duration={1500} >
                        <Logo/>
                    </Link>
                </li>
                
                <li className='navbar__item'>
                    {/* <Cta className="filled-white" url="/#signes">Signes du Covid-19</Cta> */}
                    <Link className="cta-filled-white" to="signes" spy={true} smooth={true} duration={1500} >Signes du Covid-19</Link>
                </li>
                
                <li className='navbar__item'>
                    {/* <Cta className="filled-white" url="/#me-proteger">Comment me protéger</Cta> */}
                    <Link className="cta-filled-white" to="me-proteger" spy={true} smooth={true} duration={1500} >Comment me protéger</Link>
                </li>

                <li className='navbar__item'>
                    {/* <Cta className="filled-white" to="test1" spy={true} smooth={true} duration={500}>Gestes barrières</Cta> */}
                    <Link className="cta-filled-white" to="GestesBarrieres" spy={true} smooth={true} duration={500} >Gestes barrières</Link>
                </li>

                <li className='navbar__item'>
                    <Cta className="filled-blue" url="https://don.fondationhopitaux.fr/" target='_blank'>Faire un
                        don</Cta>
                </li>
                <li className='navbar__bars' onClick={toggleNavbar}>
                    {<BurgerMenu/>}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;