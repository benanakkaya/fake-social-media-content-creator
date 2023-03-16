import React from 'react'
import { Link } from 'react-router-dom'
import EditTool from '../components/EditTool'
import TweetTemp from '../components/TweetTemp'

const FakeTweet = () => {
    return (
        <div className='flex items-start justify-between gap-5'>
            <Link to="/" className='text-base px-2 py-1 rounded-xl text-white bg-yellow-500'>Back</Link>
            <EditTool />
            <TweetTemp />
        </div>
    )
}

export default FakeTweet
