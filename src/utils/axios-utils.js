import axios from 'axios';
import {baseUrl} from '../config/main'
axios.defaults.baseURL = `http://${baseUrl}/`;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
export default axios;