import axios from 'axios';
//api = https://crud-user-mftn.onrender.com/
//rota = users

const api = axios.create({
  baseURL: 'https://crud-user-mftn.onrender.com/'
});

export default api;
