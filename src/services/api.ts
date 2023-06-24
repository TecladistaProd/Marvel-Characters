import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  params: {
    apikey: '84038be74ef46e95b6dfd8ca5a24e9a0',
  }
});
export default api;