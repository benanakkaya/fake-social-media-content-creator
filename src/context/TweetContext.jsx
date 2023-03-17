import React, { useState } from 'react'

export const tweetContext = React.createContext();


const TweetContext = (props) => {

    const [profilePicture, setProfilePicture] = useState(null);
    const [name, setName] = useState("John Doe");
    const [username, setUsername] = useState("johndoe");
    const [tweet, setTweet] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const [verified, setVerified] = useState("yellow");
    const [photoTweet, setPhotoTweet] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [tweetActions, setTweetActions] = useState({ retweets: 1, quotes: 1, likes: 1, views: 15212 });
    const [tweetActionsStatus, setTweetActionsStatus] = useState({ retweet: false, quote: false, like: false })
    const [tweetTime, setTweetTime] = useState({ hour: 0, minute: 0, day: 1, month: 1, year: 2023 })


    const values = {
        name,
        setName,
        username,
        setUsername,
        tweet,
        setTweet,
        verified,
        setVerified,
        photoTweet,
        setPhotoTweet,
        photo,
        setPhoto,
        setProfilePicture,
        profilePicture,
        setTweetActions,
        tweetActions,
        tweetActionsStatus,
        setTweetActionsStatus,
        tweetTime,
        setTweetTime
    };


    return (
        <tweetContext.Provider value={values}>
            {props.children}
        </tweetContext.Provider>
    )
}

export default TweetContext
