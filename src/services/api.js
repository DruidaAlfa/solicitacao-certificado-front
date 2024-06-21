import axios from "axios";

//const apiUrl="https://api.certidaocatolica.com.br";
//console.log(apiUrl);
const apiUrl="http://localhost:8980";

const http = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
});
  
export default http;