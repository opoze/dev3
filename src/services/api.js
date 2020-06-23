import axios from 'axios';

export default api = axios.create({
  baseURL: 'http://eeducaapi.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json',
  }
});
