import React, { useEffect, useState } from 'react'
import "./postHome.css"
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { getPostDataById } from '../../testData/testData';
import FeedHeader from '../feedHeader/FeedHeader';
import axios from 'axios';
import { getPostById } from '../../api/PostApi';



function PostHome() {
    const params = useParams();
    const postID = parseInt(params.postId);
    const [userId, setUserId] = useState();

    const getPostData = getPostDataById(Number(postID))
    // const {userId, name, topic, title, content} = getPostData;

    // If i direct to my account it will take me to my profile page else to other Authores profiles
    

    
    const [postHomeData, setPostHomeData] = useState();
    const [loadPostHome, setLoadPostHome] = useState(true);

    // Stops the infinite renders when fetching data
    let stop;
    useEffect(()=>{
          let isMounted = true; // Track mount status
        const fetchFeedData = async ()=> {
        try{
            const data = await getPostById(postID);
            setPostHomeData(data);

        } finally{setLoadPostHome(false)}
        }
        fetchFeedData()
    },[])


if (loadPostHome) return <p>Loading...</p>
else{
    const {id, user, title, topic, context} = postHomeData;
    const passCorrectUrl = userId === 1? `/viewProfile` : `/viewAuthor/${user}`;
  return <>
    <FeedHeader />
    <main className='postHomeContainer'>

        <article className='postHomeMain'>
            <Link to={passCorrectUrl} className='postHomeName' style={{color: "black", textDecoration: "none"}}>
                {"name"}
            </Link>
            <p>Student at WeThinkCode</p>

            <h2 className='postHomeTopic'>
                {topic}
            </h2>

            <h1 className='postHomeTitle'>{title}</h1>

            <p>
                {context}
            </p>
        </article>
    </main>
  </>
}
}

export default PostHome