import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"

const HomePage = () => {
    return (
        <nav className="flex p-40 flex-col items-center gap-4">
            <Link className="text-white rounded-lg bg-blue-500 w-72 py-2 flex items-center justify-center gap-4" to="/fake-tweet">
                <AiOutlineTwitter className='text-2xl' /> Fake Tweet
            </Link>
            <Link className="text-white rounded-lg bg-pink-500 w-72 py-2 flex items-center justify-center gap-4" to="/fake-instagram-post">
                <AiFillInstagram className='text-2xl' />
                Fake Instagram Post
            </Link>
        </nav>
    )
}

export default HomePage
