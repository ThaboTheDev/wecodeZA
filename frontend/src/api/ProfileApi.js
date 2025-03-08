import axios from "axios";
import { useEffect } from "react";


export const getUserById = async (authorID) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/wecode/users/${authorID}`);
        return response.data;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};