import axios from 'axios';

export async function getApiEndpoint(endpoint) {
    try {
        return await axios.get(`https://coronavirus-tracker-api.herokuapp.com${endpoint}`);
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


