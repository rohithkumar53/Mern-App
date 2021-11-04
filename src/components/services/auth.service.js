import axios from "axios";

//register request
export const register= (newUser)=>{
    console.log(process.env.baseURL);
    //post request on http://localhost:5000/api/register
    return axios.post(`${process.env.baseURL}/api/register`,newUser)
        .then(response =>{
            if(response.data){
                return Promise.resolve(response.data);
            }
        })
        .catch(error => {
            return Promise.reject(error.response.data);
        })
}

// login request
export const login = (userCredential)=>{
    return axios.post(`${process.env.baseURL}/login`, userCredential)
        .then(response =>{
            if(response.data.token){
                localStorage.setItem("x-access-token", response.data.token);
            }
            return Promise.resolve(response.data);
        })
        .catch(error =>{
            return Promise.reject(error.response.data);
        })
}