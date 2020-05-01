import React from "react";
import "../Sass/Components/_grid.scss";
import "../Sass/Components/_reset.scss";
import "../Sass/Components/_home.scss";

import Signes from "../Components/Signes";
import Soignants from "../Components/Soignants";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import MeProteger from "../Components/meProteger";

const HomePage = () => (
    <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Home/>
            <Signes/>
            <Soignants/>
            <MeProteger />
            {/* <select style={{width: '25%'}}>
                    {options}
                </select> */}
        </main>
    </>
);

export default HomePage;
