import React, { useEffect, useState } from 'react'
import "./profileHome.css"
import { viewProfileData } from '../../testData/viewProfileData'
import Post from '../post/Post';
import { buttonTypes } from '../feed/buttonTypes';
import { getAllPostByUserId } from '../../testData/testData';
import { Link } from 'react-router-dom';
import { getPostByUserId } from '../../api/PostApi';

function ProfileHome({buttonTypes, userId}) {
  const [userPosts, setUserPosts] = useState();

  useEffect(()=>{
    const fetchUserPosts = async ()=> {
      try{
        const data = await getPostByUserId(userId);
        setUserPosts(data);
      } catch{
        
      }
    }
    fetchUserPosts()
  }, [])

  if (userPosts){
    console.log(userPosts)
    return (
      <div className='profileHome'>
          {
              userPosts.map(x => {
                    const {id, user, topic, title, context} = x;
                    console.log(id)
                    return (
                        <Post key={id} buttonTypes={buttonTypes} id={user} postId={id} author={"name"} title={title} content={context} />
                    )
              })
          }
      </div>
    )
  }
}

export default ProfileHome