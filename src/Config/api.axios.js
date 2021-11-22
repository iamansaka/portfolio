import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'http://ansaka.test'
})

export default apiAxios;