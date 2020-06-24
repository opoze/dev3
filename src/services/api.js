import axios from 'axios';

export default axios.create({
  baseURL: 'http://eeducaapi.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json',
  }
});
