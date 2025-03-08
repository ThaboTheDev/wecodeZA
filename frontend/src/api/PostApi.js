import axios from "axios";


// Gets all post in the DB
export const getPost = async ()=> {
    try{
        const response =  await axios.get("http://localhost:8080/api/wecode/posts");
        return response.data;
    } catch (error){
        console.log(error);
        throw error;
    }
}