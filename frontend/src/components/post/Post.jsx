import React, { useEffect, useState } from 'react'
import "./post.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getPostById } from '../../api/PostApi';
import { marked } from "marked"


function Post({buttonTypes, id, author, title, content, userId}) {
    // If i direct to my account it will take me to my profile page else to other Authores profiles
    const passCorrectUrl = userId === 1? `/viewProfile` : `/viewAuthor/${userId}`;
    
  return (
    <div className="postContainer" key={id} >
        <div className="feedPostDetails">
            <Link to={passCorrectUrl} style={{color: "black", textDecoration: "none"}}>
                <p>{author}</p>
            </Link>
            
            <p style={{borderRight: "1px solid black", width: "10px"}}></p>

            <p>
                Student at WeThinkCode
            </p>
        </div>
        
        <Link to={`/postHome/${id}`} style={{color: "black", textDecoration: "none"}} >
            <div className="feedPostContent">
                <h1 >
                    {title}
                </h1>

                <p>
                    {content}
                </p>
            </div>
        </Link>

            <div className="feedPostInteractions">
                {buttonTypes.map(x => {
                    const {id, icon} = x;
                    return <button key={id}> {icon} </button>
                })}
            </div>
        
    </div>
  )
}

export default Post