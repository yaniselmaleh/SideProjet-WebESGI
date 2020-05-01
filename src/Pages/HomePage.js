import React from "react";
import "../Sass/Components/_home.scss";

import Signes from "../Components/Signes";
import Soignants from "../Components/Soignants";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import MeProteger from "../Components/meProteger";
import GestesBarrieres from "../Components/GestesBarrieres";

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
            <GestesBarrieres/>
            {/* <select style={{width: '25%'}}>
                    {options}
                </select> */}
        </main>
    </>
);

export default HomePage;
