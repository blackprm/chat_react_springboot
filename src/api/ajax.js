import axios from 'axios';
export default function ajax(url,data,method="GET") {

  console.log(data + " ============= ");
  axios.defaults.baseURL = 'http://10.200.32.234/';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';



  if(method === "GET"){
    let queryString = '';
    Object.keys(data).forEach(key => {
      queryString += key + "=" + data[key] + "&";
    } )


    if(queryString !== ""){
      url += url + "?" + queryString.substring(0,queryString.lastIndexOf("&"));
    }

    return axios.get(url);
  }else{
    return axios.post(url,data);
  }
}