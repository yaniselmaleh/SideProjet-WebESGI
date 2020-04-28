import React from 'react';
import axios from 'axios';

export async function getApi(url) {
    try {
        return await axios.get(`https://coronavirus-tracker-api.herokuapp.com/${url}`);
    } catch (error) {
        console.error(error);
    }
}

export async function getApiWithParams(url, params) {
    try {
        return await axios.get(`https://coronavirus-tracker-api.herokuapp.com/${url}`, {params});
    } catch (error) {
        console.error(error);
    }
}


