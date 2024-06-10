import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.certidaocatolica.com.br',
    withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
});
  
export default http;