import { backendUrl } from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    const response = await fetch(backendUrl + route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    
    const data = await response.json()
    // console.log(data)
    return data;
};

export const makeAuthenticatedPOSTRequest = async (route, body) => {
    const token = getToken();
    const response = await fetch(backendUrl + route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
    })
    
    const data = await response.json()
    // console.log(data)
    return data;
};

const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};