import React, { useEffect, useState } from 'react'
import "./viewProfile.css"
import { FaArrowLeft } from "react-icons/fa6";
import ProfileHome from '../profileHome/ProfileHome';
import ProfileAbout from '../profileAbout/ProfileAbout';
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import { getUserDataById } from '../../testData/testData';
import FeedHeader from '../feedHeader/FeedHeader';
import axios from 'axios';
import { use } from 'react';
import { getUserById } from '../../api/ProfileApi';


function ViewProfile() {
    const postButtons = [
        {
            id: "l",
            icon: <CiHeart />
        }
    ]

    const params = useParams()
    const authorID = parseInt(params.authorId);

    // const getData = getUserDataById(Number(authorID));
    // const {userId, name, miniDes, mainDes, following, followers, dateJoined} = getData;

    const [viewerPage, setViewerPage] = useState(0);
    let currentViewerPage;



    const [profileData, setProfileData] = useState();
    const [viewLoad, setViewLoad] = useState(true);
    useEffect(function (){
        const fetchUser = async ()=> {
            try{
                const data = await getUserById(authorID);
                setProfileData(data);
            } catch (error){
                console.log(error)
            } finally{
                setViewLoad(false)
            }
        }
        fetchUser()
    },[])

    if (viewLoad) return <p>Loading...</p>
    else if (profileData){
        const {id, username, lastname, name, bio} = profileData;
        console.log(profileData)
        // Navigating the Home and About sections
        if (viewerPage === 0) currentViewerPage = <ProfileHome buttonTypes={postButtons} userId={id} />;
        else if( viewerPage === 1) currentViewerPage = <ProfileAbout des={bio} following={22} followers={55} dateJoined={2003} />
  return <>
    <FeedHeader />

    <main className='viewProfileMain'>
        <article className="viewProfileLeft">
            <section className='viewLeftTop'>
                {/* <div className="viewBack bigScreenButton">
                    <button>
                        <FaArrowLeft />
                    </button>
                </div> */}

                <h1 className='viewName'>{username}</h1>

            </section>

            <section className='viewLeftBottom'>
                <div className="viewNav">
                    <button onClick={()=> setViewerPage(0)}>
                        Home
                    </button>

                    <button onClick={()=> setViewerPage(1)}>
                        About
                    </button>
                </div>
                
                {currentViewerPage}
            </section>
        </article>

        <article className='viewProfileRight'>
            <div className="viewBack smallScreenButton">
                <button>
                    <FaArrowLeft />
                </button>
            </div>
            <h2>
                {name} {lastname}
            </h2>

            <p>
                Student at WeThinkCode
            </p>

            <p className='viewDes'>
                {bio}
            </p>

            <div className="viewFollow">
                <button>
                    Follow
                </button>

                <p>
                    {"following"} Following
                </p>
            </div>
        </article>
    </main>
  </>
    }
}

export default ViewProfile