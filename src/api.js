import axios from 'axios';
const BASE_URL =
    "https://api.themoviedb.org/3";
const TMDB_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdwi0iJjNmU5MzM1Yjg5Y2E3 NWEMGJjY2UxYzcyYmZKMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODUNjc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd678ieiLOIo2Bg_FI "

const headers = {
    Authorization: "bearer " +
        TMDB_TOKEN,

};
export const fetchDataFromApi = async(url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params, });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}