import React, { useEffect, useState } from 'react'
import "./write.css"
import { FaArrowLeft } from "react-icons/fa6";
import FeedHeader from '../feedHeader/FeedHeader';
import { sendPost } from '../../api/PostApi';

function Write() {
    const [title, setTitle] = useState("");
    const [topic, setTopic] = useState("");
    const [context, setContent] = useState("");

    const createPostData = async ()=>{
        let data = {
            "title": `# ${title}`,
            "topic": `## ${topic}`,
            "context": context
        }

        try{
            let ye = await sendPost(data)
            setContent("");
            setTitle("");
            setTopic("");
            window.location.href = "/feed";
            
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(context);
  return <>
    <FeedHeader />
    <main className='writeMain'>
        <section className="writeButtons">
            <button className='postBackButton'>
                <FaArrowLeft />
            </button>

            <button className='postButton' onClick={()=>createPostData()}>
                Post
            </button>
        </section>

        <section className='writeInputs'>
            <input type="text" onChange={e => setTitle(e.target.value)} placeholder='Title:' value={title} className='writeTitle' />

            <input type="text" onChange={e => setTopic(e.target.value)} value={topic} className='writeTopic' placeholder='Topic:' />

            <textarea onChange={e => setContent(e.target.value)} value={context} className='writeContent'>

            </textarea>
        </section>
    </main>
  </>
}

export default Write