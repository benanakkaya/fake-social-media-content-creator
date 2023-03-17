import React from 'react'
import { Link } from 'react-router-dom'
import TweetEditTool from '../components/TweetEditTool'
import Tweet from '../components/Tweet'
import {TiArrowBack} from 'react-icons/ti'

const FakeTweet = () => {
    return (
        <div className='flex items-start justify-between gap-5 p-5 '>
            <Link to="/" className='text-base px-2 py-1 flex gap-2 items-center rounded-xl text-white bg-red-300'><TiArrowBack /> Back</Link>
            <TweetEditTool />
            <Tweet />
        </div>
    )
}

export default FakeTweet
