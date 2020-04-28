import React, {useEffect, useState} from "react";
import {getApi} from '../Components/api';

const HomePage = () => {

    const [nbDeaths, setNbDeaths] = useState(0);

    useEffect(() => {
        getApi('deaths')
            .then((data) => console.log(data))
    }, [])

    return (
        <div>
            Home Page
        </div>
    );
}

export default HomePage;