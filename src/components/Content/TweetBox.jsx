import React, { useState } from 'react'
import TweetBoxIcons from './TweetBoxIcons'
import TweetBoxIconsData from '../../Data/TwitterBoxIcons.json'
import axios from 'axios';

function TweetBox() {
  const [content, setContent] = useState("");
  
  const sendTweet = async () => {
    const userTweet = {
        "displayName": "Kaan Tetik",
        "userName": "@Kaan.tk3",
        "content": content,
        "timestamp": `${new Date().getHours()}s`,
        "avatar": "/img/ProfilePhoto.png"
    }

    try {
        const response = await axios.post("http://localhost:3000/posts", userTweet);
        setContent("")
    }
    catch (err) {
        console.log("Post işlemi yapılmadı.")
    }
  }

  return (
    <div className='p-3 flex border-b'>
        <div className='mr-2'>
            <img src="/img/ProfilePhoto.jpg" alt="Profile Photo" className='w-10 h-10 rounded-full'/>
        </div>
        <div className='w-full'>
            <div className='mb-2'>
                <textarea className='w-full placeholder-gray-dark focus:outline-none overflow-hidden mb-2 resize-none pl-2' row="15" placeholder='What is happening?!' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    {TweetBoxIconsData.map(({ icon, name }) => (
                        <TweetBoxIcons key={name} icon={icon}></TweetBoxIcons>
                    ))}
                </div>
                <div>
                    <button className='text-white bg-primary-base py-1 px-4 rounded-full flex items-center justify-center' 
                    onClick={sendTweet}>
                        <span className='font-semibold text-sm'>Post</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TweetBox