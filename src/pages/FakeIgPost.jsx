import React from 'react'
import { Link } from 'react-router-dom'
import IgPostEditTool from '../components/IgPostEditTool'
import InstagramPost from '../components/InstagramPost'
import {TiArrowBack} from 'react-icons/ti'

const FakeIgPost = () => {
    return (
        <div className='flex items-start justify-between gap-20 p-5'>
            <Link to="/" className='text-base px-2 py-1 flex gap-2 items-center rounded-xl text-white bg-red-300'><TiArrowBack /> Back</Link>
            <IgPostEditTool />
            <InstagramPost />
        </div>
    )
}

export default FakeIgPost
