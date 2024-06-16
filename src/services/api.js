import axios from "axios";

const apiUrl="http://localhost:8980";
console.log(apiUrl);

const http = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
});
  
export default http;