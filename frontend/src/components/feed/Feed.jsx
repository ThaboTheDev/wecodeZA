import React, { useEffect, useState } from 'react'
import "./feed.css"
import { feedFollowData } from './feedTestData'
import { buttonTypes } from './buttonTypes';
import Post from '../post/Post';
import { CiHeart } from "react-icons/ci";
import FeedFollow from '../feedFollow/FeedFollow';
import { Link } from 'react-router-dom';
import { postData } from '../../testData/testData';
import { users } from '../../testData/testData';
import FeedHeader from '../feedHeader/FeedHeader';
import axios from 'axios';
import { getPosts } from '../../api/PostApi';
import { getUsers } from '../../api/ProfileApi';

function Feed({}) {
  // Makes sure post only has 1 button type -> like button
  const postButtons = [
    {
      id: "l",
      icon: <CiHeart />
    }
  ]
  
  const [feedData, setFeedData] = useState();
  const [followUsers, setFollowUsers] = useState();
  const [loadFeed, setLoadFeed] = useState(true);
  const [followLoad, setFollowLoad] = useState(true);
  const fetchUserId = JSON.parse(sessionStorage.getItem("userData"));

  useEffect(()=>{
    const fetchPosts = async ()=> {
      try{
        const data = await getPosts();
        setFeedData(data);
      } catch (error){
        console.log(error);
        throw error;
      } finally{
        setLoadFeed(false);
      }
    }

    const fetchUsers = async ()=> {
      try{
        const data = await getUsers();
        setFollowUsers(data);
      } catch (error){
        console.log(error);
        throw error
      } finally{
        setFollowLoad(false);
      }
    }

    fetchPosts();
    fetchUsers();
  },[])

  if (loadFeed || followLoad) return <p>Loading...</p>
  else if (feedData && followUsers){
    return <>
      <FeedHeader />
      <main className='feedMain'>
          <article className='feedLeft'>
              <section className='topFeed'>
                <p>+</p>

                {
                  buttonTypes.map(x => {
                    const {id, name} = x;
                    return <button key={id}>{name}</button>
                  })
                }
              </section>

              <section className='bottomFeed'>
                {
                  feedData.map(x => {
                    const {id, user, topic, title, context} = x;
                    return (
                        <Post key={id} buttonTypes={postButtons} id={id} author={"name"} title={title} userId={user} content={context} />
                    )
                  })
                }
              </section>
          </article>

          <article className='rightFeed'>
              <h2 className='fh'>
                  Follow new Author's
              </h2>

              <section className='feedFollow'>
                {
                  followUsers.map(x => {
                    console.log(followUsers)
                    const {id, name} = x;
                    return id != parseInt(fetchUserId.id)? <FeedFollow key={id} id={id} name={name} followers={32} /> : "";
                  })
                }
              </section>
          </article>
      </main>
    </>
  }
}

export default Feed