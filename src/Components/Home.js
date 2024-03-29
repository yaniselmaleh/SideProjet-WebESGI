import React from "react";
import Bacterie1 from "../images/bacterie1.svg";
import Bacterie2 from "../images/bacterie2.svg";
import {getApiEndpoint} from "../Utils/api";
import {numberWithCommas} from "../Utils/utils";

import "../Sass/Components/_home.scss";
import "../Sass/Components/_mouse.scss";

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            nbDeaths: 0,
            nbConfirmed: 0,
            nbRecovered: 0
        }
    }

    componentDidMount() {
        getApiEndpoint('/deaths').then(response => this.setState({nbDeaths: numberWithCommas(response.data.latest)}));
        getApiEndpoint('/confirmed').then(response => this.setState({nbConfirmed: numberWithCommas(response.data.latest)}));
        getApiEndpoint('/recovered').then(response => this.setState({nbRecovered: numberWithCommas(response.data.latest)}));
        //getApiEndpoint('/v2/locations').then(response => this.getCountryList(response));
    }



    render() {
        const {nbDeaths, nbConfirmed, nbRecovered} = this.state;
        // const options = countryList.map((country, index) => <option key={index} value={country}>{country}</option>);
        return (
            <section id="home" className="flex-center">
                <h1>Covid-199999999</h1>
                <p>Ce site à été créé par deux étudiants, dans le but de regrouper <br></br>les informations utiles liées au covid 19</p>
                <section className="flex conteneur">
                    <img src={Bacterie1} alt="bacterie" className="rotating"/>
                    <article className="col-3">
                        <span><b id="nbConfirmed">{nbConfirmed}</b><br></br>Cas confirmé</span>
                    </article>

                    <article className="col-3" id="middle">
                        <span><b id="nbRecovered">{nbRecovered}</b><br></br>Cas guéris</span>
                    </article>

                    <article className="col-3">
                        <span><b id="nbDeaths">{nbDeaths}</b><br></br>Cas décédés</span>
                    </article>
                    <img src={Bacterie2} alt="bacterie" className="rotating"/>
                </section>
                    <div className="mouse"></div>
            </section>
        )
    }
}
