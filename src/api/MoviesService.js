import axios from 'axios';
const API_KEY = '417d2fb88018fe8065559a832c1973d9';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {

    static getMovies(){
        return axios(withBaseUrl('movie/popular'));
    }

}