import React from "react";
import {ReactComponent as Logo} from "../images/nav-logo.svg";
import {ReactComponent as BurgerMenu} from "../images/burgermenu.svg";
import Cta from "./layout/Cta";
import "../Sass/Components/_navbar.scss";

const Navbar = () => {

    const toggleNavbar = () => {
        const items = Array.from(document.querySelectorAll('.navbar__item'));
        items.forEach(item => item.classList.contains('show') ? item.classList.remove('show') : item.classList.add('show'));
    }


    return (
        <nav className='navbar'>
            <ul>
                <li className='navbar__logo'>
                    <Cta url={window.location.origin}>
                        <Logo/>
                    </Cta>
                </li>
                <li className='navbar__item'>
                    <Cta className="filled-white" url="/test">Comment le Covid-19 se transmet</Cta>
                </li>
                <li className='navbar__item'>
                    <Cta className="filled-white" url="/#signes">Signes du Covid-19</Cta>
                </li>
                <li className='navbar__item'>
                    <Cta className="filled-white" url="/#GestesBarrieres">Gestes barrières</Cta>
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