import React from "react";
import {getApiEndpoint} from '../Components/api';
import {numberWithCommas} from '../Utils/utils';


export default class HomePageClass extends React.Component {
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
        const {nbDeaths, nbConfirmed, nbRecovered, countryList} = this.state;
        const options = countryList.map((country, index) => <option key={index} value={country}>{country}</option>);
        return (
            <div>
                <p>Nombre de cas : {nbDeaths}</p>
                <p>Nombre de morts : {nbConfirmed}</p>
                <p>Nombre de guéris : {nbRecovered}</p>

                <select style={{width: '25%'}}>
                    {options}
                </select>
            </div>
        )
    }
}


