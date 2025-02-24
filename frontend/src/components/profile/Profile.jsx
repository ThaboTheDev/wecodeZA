import React, { useEffect, useState } from 'react'
import "./profile.css"
import { FaArrowLeft } from "react-icons/fa6";
import ProfileHome from '../profileHome/ProfileHome';
import { CiHeart } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import ProfileAbout from '../profileAbout/ProfileAbout';
import { getUserDataById } from '../../testData/testData';
import FeedHeader from '../feedHeader/FeedHeader';

function Profile({}) {
    const postButtons = [
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
            icon: <FaRegTrashAlt />
        }
    ]

    // const [data, setData] = useState({});

  const [data, setData] = useState(null);


    const getData = getUserDataById(1);
    const {userId, name, miniDes, mainDes, following, followers, dateJoined} = getData;

    const [userPage, setUserPage] = useState(0);
    let currentPage = <ProfileHome buttonTypes={postButtons} userId={userId} />;

    // Navigates the Home and About sections
    if (userPage === 0) currentPage = <ProfileHome buttonTypes={postButtons} userId={userId} />;
    else if (userPage === 1) currentPage = <ProfileAbout des={mainDes} following={following} followers={followers} dateJoined={dateJoined} />

  return <>
    <FeedHeader />
    <main className='userProfileMain'>
        <article className='userProfileTop'>
            {/* <div className="userBack">
                <button>
                    <FaArrowLeft />
                </button>
            </div> */}

            <h1 className='userName'>{name}</h1>

            <p className='userDes'>
                {miniDes}
            </p>

            <p className='userFollowing'>
                {following} Following
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

export default Profile