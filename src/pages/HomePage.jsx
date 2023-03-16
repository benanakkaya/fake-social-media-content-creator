import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <nav className="flex items-center gap-4">
            <Link className="text-white rounded-lg bg-blue-500 px-2 py-1z" to="/fake-tweet">Fake Tweet</Link>
            <Link className="text-white rounded-lg bg-pink-500 px-2 py-1z" to="/fake-instagram-post">Fake Instagram Post (Soon)</Link>
        </nav>
    )
}

export default HomePage
