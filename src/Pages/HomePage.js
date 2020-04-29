import React, {useEffect, useState} from "react";
import {getApiEndpoint} from '../Components/api';
import {numberWithCommas} from '../Utils/utils';

const HomePage = () => {

    const [nbDeaths, setNbDeaths] = useState(0);
    const [nbConfirmed, setNbConfirmed] = useState(0);
    const [nbRecovered, setNbRecovered] = useState(0);
    const [countryList, setCountryList] = useState([]);
    const [countryOptions, setCountryOptions] = useState([]);


    useEffect(() => {
        getApiEndpoint('/deaths').then(response => setNbDeaths(numberWithCommas(response.data.latest)));
        getApiEndpoint('/confirmed').then(response => setNbConfirmed(numberWithCommas(response.data.latest)));
        getApiEndpoint('/recovered').then(response => setNbRecovered(numberWithCommas(response.data.latest)))
        getApiEndpoint('/v2/locations').then(response => getCountryList(response))
    }, [])


    const getCountryList = response => {
        const locationsList = response.data.locations.map(location => location.country)
        const locations = Array.from(new Set(locationsList));
        const options = locations.map((location, index) => {
            return <option key={index} value={location}>{location}</option>
        });
        setCountryList(locations);
        setCountryOptions(options);
    }


    return (
        <>
            <div>
                <p>Nombre de cas : {nbDeaths}</p>
                <p>Nombre de morts : {nbConfirmed}</p>
                <p>Nombre de guéris : {nbRecovered}</p>
                <select style={{width: '25%'}}>
                    {countryOptions}
                </select>
            </div>
        </>
    )
}

export default HomePage;