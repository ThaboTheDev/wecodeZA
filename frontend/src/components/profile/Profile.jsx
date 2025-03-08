import React, { useEffect, useState } from 'react'
import "./profile.css"
import ProfileHome from '../profileHome/ProfileHome';
import ProfileAbout from '../profileAbout/ProfileAbout';
import { getUserDataById } from '../../testData/testData';
import FeedHeader from '../feedHeader/FeedHeader';
import axios from "axios";
import { postButtons } from './profileButtons';
import { getUserById } from '../../api/ProfileApi';

function Profile({}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [userPage, setUserPage] = useState(0);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(1)
        setData(data)
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);
  

  if (loading) return <p>Loading...</p>;

  else if (data){
    const {id, username, lastname, name, bio} = data;

    // Navigates the Home and About sections
    let currentPage = <ProfileHome buttonTypes={postButtons} userId={parseInt(id)} />;
    if (userPage === 0) currentPage = <ProfileHome buttonTypes={postButtons} userId={parseInt(id)} />;
    else if (userPage === 1) currentPage = <ProfileAbout des={bio} following={33} followers={3322} dateJoined={2003} />


    return <>
      <FeedHeader />
      <main className='userProfileMain'>
          <article className='userProfileTop'>
              <h1 className='userName'>{name} {lastname}</h1>

              <p className='userDes'>
                  {bio}
              </p>

              <p className='userFollowing'>
                  33 Following
              </p>
          </article>

          <article className='userProfileBottom'>
              <div className="userProfileNav">
                  <button onClick={()=> setUserPage(0)}>
                      Home
                  </button>

                  <button onClick={()=> setUserPage(1)}>
                      About
                  </button>
              </div>
              {currentPage}
          </article>
      </main>
    </>
  }
}

export default Profile