import axios from "axios";


// Gets all users in the DB
export const getUsers = async ()=>{
    try{
        const response = await axios.get("http://localhost:8080/api/wecode/users")
        return response.data;
    } catch (error){
        console.log(error);
        throw error
    }
}


// Gets user information by ID
export const getUserById = async (authorID) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/wecode/users/${authorID}`);
        return response.data;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};