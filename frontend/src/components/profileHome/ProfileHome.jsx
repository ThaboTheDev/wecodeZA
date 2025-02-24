import React from 'react'
import "./profileHome.css"
import { viewProfileData } from '../../testData/viewProfileData'
import Post from '../post/Post';
import { buttonTypes } from '../feed/buttonTypes';
import { getAllPostByUserId } from '../../testData/testData';
import { Link } from 'react-router-dom';

function ProfileHome({buttonTypes, userId}) {
  const getData = getAllPostByUserId(userId);
  return (
    <div className='profileHome'>
        {
            getData.map(x => {
                  const {postId, name, title, content, topic} = x;
                  return (
                      <Post key={postId} buttonTypes={buttonTypes} id={postId} author={name} title={title} content={content} />
                  )
            })
        }
    </div>
  )
}

export default ProfileHome