import axios from "axios";


const http = axios.create({
    baseURL: 'http://localhost:8980/',
    withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
});
  
export default http;