import React, {useEffect, useState} from "react";
import {getApi} from '../Components/api';

const HomePage = () => {

    const [nbDeaths, setNbDeaths] = useState(0);


    useEffect(() => {
        getApi('deaths')
            .then(response => setNbDeaths(response.data.latest))
    }, [])

    return (
        <div>
            {nbDeaths}
        </div>
    );
}

export default HomePage;