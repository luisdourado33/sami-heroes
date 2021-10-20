import axios from 'axios';
import { sessionToken } from './auth';

let endpoint = `https://superheroapi.com/api/${sessionToken}`;

const api = axios.create({ baseURL: endpoint });

export default api;
