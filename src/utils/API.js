import axios from "axios";
import { HTTP } from "./HTTP";

// export default axios.create({
//   baseURL: "https://auto-leasing-bank.herokuapp.com/api/",
//   responseType: "json"
// });

const baseURL = 'https://auto-leasing-bank.herokuapp.com/api/'

export function API (method,path) {

    if (method === HTTP.GET){
       return axios.get(baseURL + path).then(res => res.data)
    }
}