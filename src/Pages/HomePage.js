import React, {useEffect, useState} from "react";
import {getApiEndpoint} from '../Components/api';
import {numberWithCommas} from '../Utils/utils';

const HomePage = () => {

    const [nbDeaths, setNbDeaths] = useState(0);
    const [nbConfirmed, setNbConfirmed] = useState(0);
    const [nbRecovered, setNbRecovered] = useState(0);


    useEffect(() => {
        getApiEndpoint('/deaths').then(response => setNbDeaths(numberWithCommas(response.data.latest)));
        getApiEndpoint('/confirmed').then(response => setNbConfirmed(numberWithCommas(response.data.latest)));
        getApiEndpoint('/recovered').then(response => setNbRecovered(numberWithCommas(response.data.latest)))
    }, [])

    return (
        <div>
            <p>Nombre de cas : {nbDeaths}</p>
            <p>Nombre de morts : {nbConfirmed}</p>
            <p>Nombre de guéris : {nbRecovered}</p>
        </div>
    );
}

export default HomePage;