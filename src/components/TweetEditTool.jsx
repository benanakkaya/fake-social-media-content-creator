import React, { useContext, useRef } from 'react'
import { tweetContext } from '../context/TweetContext';
import domtoimage from 'dom-to-image';


const TweetEditTool = () => {

    const fileInputRef = useRef(null);

    const profilePictureRef = useRef(null);

    const {
        setName,
        setUsername,
        setTweet,
        setVerified,
        verified,
        photoTweet,
        setPhotoTweet,
        setPhoto,
        setProfilePicture,
        setTweetActions,
        tweetActions,
        tweetActionsStatus,
        setTweetActionsStatus,
        tweetTime,
        setTweetTime } = useContext(tweetContext);



    const handleLike = (e) => {
        if (e.target.checked) {
            setTweetActionsStatus({ ...tweetActionsStatus, like: true })
        }
        else {
            setTweetActionsStatus({ ...tweetActionsStatus, like: false })
        }
    }
    const handleRetweet = (e) => {
        if (e.target.checked) {
            setTweetActionsStatus({ ...tweetActionsStatus, retweet: true })
        }
        else {
            setTweetActionsStatus({ ...tweetActionsStatus, retweet: false })
        }
    }
    const handleQuote = (e) => {
        if (e.target.checked) {
            setTweetActionsStatus({ ...tweetActionsStatus, quote: true })
        }
        else {
            setTweetActionsStatus({ ...tweetActionsStatus, quote: false })
        }
    }


    const takeScreenshot = () => {
        const el = document.getElementById('tweet-component');
        domtoimage.toBlob(el).then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'my-component.png';
            link.href = url;
            link.click();
        });
    }

    const handleTweet = (tweet) => {
        let newTweet=tweet
        .replace(/@([\w]+)/g, '<span class="text-twitterBlue">@$1</span>')
        .replace(/#([\wşçöüuıİ]+)/gi, '<span class="text-twitterBlue">#$1</span>')
        .replace(/(https?:\/\/[\w\.\/]+)/, '<span class="text-twitterBlue">$1</span>');
        setTweet(newTweet)
    }

  



    return (
        <div className='flex flex-col gap-5 p-5 '>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' htmlFor='name'>
                Profile Picture:
                <button onClick={() => profilePictureRef.current.click()} className={`bg-gray-400  px-2 py-1 rounded-lg w-[300px]`}>Choose a Profile Picture</button>
                <input onChange={(e) => setProfilePicture(e.target.files[0])} ref={profilePictureRef} className='hidden text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="file" id="photo" name="photo" accept=".jpg, .jpeg, .png" />
            </label>
            <label className='flex items-center gap-4 w-full justify-between text-white text-[14px]'>
                Verified
                <select onChange={(e) => setVerified(e.target.value)} value={verified} className='w-[350px] text-black px-2 py-1 rounded-lg text-[14px]'>
                    <option value="no">No Verified</option>
                    <option value="blue">Verified (Blue)</option>
                    <option value="yellow">Verified (Yellow)</option>
                </select>
            </label>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' htmlFor='name'>Name: <input onChange={(e) => setName(e.target.value)} className='text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="text" id="name" /></label>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' htmlFor='username'>Username: <input onChange={(e) => setUsername(e.target.value)} className='text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="text" id="username" /></label>
            <label className='flex w-full justify-between gap-4 items-start  text-[14px] text-white' htmlFor='tweet'>Tweet: <textarea onChange={(e) => handleTweet(e.target.value)} className='text-[14px] text-black px-2 py-1 rounded-lg w-[350px] max-h-[125px] min-h-[75px]' type="text" id="tweet" /></label>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' >
                <div className='flex items-center gap-4'>
                    <input onChange={() => setPhotoTweet((prev) => !prev)} type="checkbox" />Photo Tweet:
                </div>
                <button onClick={() => fileInputRef.current.click()} disabled={photoTweet ? false : true} className={`${photoTweet ? 'bg-gray-400' : 'bg-gray-600'}  px-2 py-1 rounded-lg w-[300px]`}>Choose a picture</button>
                <input onChange={(e) => setPhoto(e.target.files[0])} ref={fileInputRef} className='hidden text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="file" id="photo" name="photo" accept=".jpg, .jpeg, .png" />
            </label>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' htmlFor='views'>Views: <input onChange={(e) => setTweetActions({...tweetActions,views:e.target.value})} className='text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="number" id="views" /></label>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 text-[14px] text-white'>
                    <input onChange={(e) => handleRetweet(e)} type="checkbox" />
                    <label className='flex w-full justify-between gap-4 items-center  ' htmlFor='retweet'>
                        Retweet:
                        <input disabled={!tweetActionsStatus.retweet} min={1} onChange={(e) => setTweetActions({ ...tweetActions, retweets: e.target.value })} className='text-[14px] text-black px-2 py-1 rounded-lg w-[50px]' type="number" id="retweet" />
                    </label>
                </div>
                <div className='flex items-center gap-4 text-[14px] text-white'>
                    <input onChange={(e) => handleQuote(e)} type="checkbox" />
                    <label className='flex w-full justify-between gap-4 items-center  ' htmlFor='quote'>
                        Quote:
                        <input disabled={!tweetActionsStatus.quote} min={1} onChange={(e) => setTweetActions({ ...tweetActions, quotes: e.target.value })} className='text-[14px] text-black px-2 py-1 rounded-lg w-[50px]' type="number" id="quote" />
                    </label>
                </div>
                <div className='flex items-center gap-4 text-[14px] text-white'>
                    <input onChange={(e) => handleLike(e)} type="checkbox" />
                    <label className='flex w-full justify-between gap-4 items-center  ' htmlFor='like'>
                        Like:
                        <input disabled={!tweetActionsStatus.like} min={1} onChange={(e) => setTweetActions({ ...tweetActions, likes: e.target.value })} className='text-[14px] text-black px-2 py-1 rounded-lg w-[50px]' type="number" id="like" />
                    </label>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 text-[14px] text-white'>
                    <label className='flex w-full justify-between gap-2 items-center  ' htmlFor='retweet'>
                        Hour:
                        <input placeholder='23' min={1} max={23} onChange={(e) => setTweetTime({ ...tweetTime, hour: e.target.value })} className='text-[14px] text-black px-2 py-1 rounded-lg w-[62px] flex justify-center' type="number" id="retweet" />
                        <input placeholder='59' min={0} max={59} onChange={(e) => setTweetTime({ ...tweetTime, minute: e.target.value })} className='text-[14px] text-black px-2 py-1 rounded-lg w-[62px] flex justify-center' type="number" id="quote" />
                    </label>
                </div>
                <div className='flex items-center gap-4 text-[14px] text-white'>
                    <label className='flex w-full justify-between gap-2 items-center  ' htmlFor='like'>
                        Date:
                        <input placeholder='31' min={1} max={31} onChange={(e) => setTweetTime({ ...tweetTime, day: e.target.value })} className='text-[14px] text-black px-2 py-1 rounded-lg w-[62px] flex justify-center' type="number" id="like" />
                        <input placeholder='12' min={1} max={12} onChange={(e) => setTweetTime({ ...tweetTime, month: e.target.value })} className='text-[14px] text-black px-2 py-1 rounded-lg w-[62px] flex justify-center' type="number" id="like" />
                        <input placeholder='1995' min={1990} max={3000} onChange={(e) => setTweetTime({ ...tweetTime, year: e.target.value })} className='text-[14px] text-black px-2 py-1 rounded-lg w-[62px] flex justify-center' type="number" id="like" />
                    </label>
                </div>
            </div>
            <button value="Download" onClick={takeScreenshot} className='bg-blue-400 px-2 py-1 w-full font-bold text-white rounded-lg'>Create and Download</button>
        </div >
    )
}

export default TweetEditTool