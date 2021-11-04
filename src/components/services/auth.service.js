import axios from "axios";

//register request
export const register= (newUser)=>{
    //post request on http://localhost:5000/api/register
    axios.post(`${process.env.baseURL}/register`,newUser)
        .then(response =>{
            if(response.data){
                return Promise.resolve(response.data);
            }
        })
        .catch(error => {
            return Promise.reject(error.response.data);
        })
}