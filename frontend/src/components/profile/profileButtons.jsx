import { CiHeart } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import { deletePost } from "../../api/PostApi";

export const postButtons = [
        {
            id: "l",
            icon: <CiHeart />
        },
        {
            id: "e",
            icon: <TfiWrite />
        },
        {
            id: "d",
            icon: <FaRegTrashAlt />,
            action: async (postId)=> {
                await deletePost(postId)
            }
        }
    ]