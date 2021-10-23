import axios from 'axios';
import { sessionToken } from './auth';

const corsProxyUrl = 'https://corsanywhere.herokuapp.com/';
let endpoint = `${corsProxyUrl}https://superheroapi.com/api/${sessionToken}`;

const api = axios.create({
  baseURL: endpoint,
});

api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default api;
