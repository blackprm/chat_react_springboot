import axios from 'axios';

axios.defaults.baseURL = 'http://10.200.32.234/';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
export default axios;