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


const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

  export const userLoginFetch = user => {
      console.log(user)
    return dispatch => {
      return fetch("https://auto-leasing-bank.herokuapp.com/api/login/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => console.log("res" - resp))
        .then(data => {
          if (data.message) {
              console.log("data"-data)
           //тут ваша логика
          } else {
            console.log(data)

            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }