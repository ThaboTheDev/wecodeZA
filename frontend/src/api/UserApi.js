import axios from "axios";

export const getLoginData = async (body)=> {
    try{
        const response = await axios.post("http://localhost:8080/api/wecode/users/loginn", body);
        sessionStorage.setItem("userData", JSON.stringify(response.data));
    } catch (error){
        console.log(error)
        throw error;
    }
}