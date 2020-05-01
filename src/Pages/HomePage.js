import React from "react";
import {getApiEndpoint} from '../Utils/api';
import {numberWithCommas} from '../Utils/utils';

import "../Sass/Components/_grid.scss";
import "../Sass/Components/_reset.scss";
import "../Sass/Components/_home.scss";

import Signes from "../Components/Signes";
import Soignants from "../Components/Soignants";

import Bacterie1 from "../images/bacterie1.svg";
import Bacterie2 from "../images/bacterie2.svg";
import Navbar from "../Components/Navbar";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nbDeaths: 0,
            nbConfirmed: 0,
            nbRecovered: 0,
            countryList: []
        }
    }

    componentDidMount() {
        getApiEndpoint('/deaths').then(response => this.setState({nbDeaths: numberWithCommas(response.data.latest)}));
        getApiEndpoint('/confirmed').then(response => this.setState({nbConfirmed: numberWithCommas(response.data.latest)}));
        getApiEndpoint('/recovered').then(response => this.setState({nbRecovered: numberWithCommas(response.data.latest)}));
        getApiEndpoint('/v2/locations').then(response => this.getCountryList(response));
    }

    getCountryList(response) {
        const locationsList = response.data.locations.map(location => location.country)
        const locations = Array.from(new Set(locationsList));
        this.setState({countryList: locations})
    }

    render() {
        // const {nbDeaths, nbConfirmed, nbRecovered, countryList} = this.state;
        const {nbDeaths, nbConfirmed, nbRecovered} = this.state;
        // const options = countryList.map((country, index) => <option key={index} value={country}>{country}</option>);

        return (
            <>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section id="home" className="flex-center">
                        <h1>Codiv-19</h1>
                        <p>Site créé par deux étudiants, ce site à pour but de regrouper<br></br>les informations utiles
                            liées au covid 19</p>


                        <section className="flex conteneur">
                            <img src={Bacterie1} alt="bacterie"/>
                            <article className="col-3">
                                <span><b id="nbConfirmed">{nbConfirmed}</b><br></br>Cas guéris</span>
                            </article>

                            <article className="col-3">
                                <span><b id="nbRecovered">{nbRecovered}</b><br></br>Cas décédés</span>
                            </article>

                            <article className="col-3">
                                <span><b id="nbDeaths">{nbDeaths}</b><br></br>Cas confirmé</span>
                            </article>
                            <img src={Bacterie2} alt="bacterie"/>
                        </section>
                    </section>

                    <Signes/>
                    <Soignants/>
                    {/* <select style={{width: '25%'}}>
                    {options}
                </select> */}
                </main>
            </>
        )
    }
}