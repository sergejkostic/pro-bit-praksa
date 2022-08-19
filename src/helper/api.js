import axios from "axios";

const API_URL = 'https://random-data-api.com/api';

async function getUsers() {
    const res = await axios(`${API_URL}/users/random_user?size=50`);
    return res.data;
}

async function getUser() {
    const res= await axios (`${API_URL}/users/random_user`)
    return res.data;
}

export {getUsers, getUser};