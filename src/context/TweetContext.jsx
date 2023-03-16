import React, { useState } from 'react'

export const tweetContext = React.createContext();


const TweetContext = (props) => {

    const [profilePicture, setProfilePicture] = useState(null);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [tweet, setTweet] = useState("");
    const [verified, setVerified] = useState("no");
    const [photoTweet, setPhotoTweet] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [hasLike, setHasLike] = useState(false);
    const [likes, setLikes] = useState(1);
    const [hasRetweet, setHasRetweet] = useState(false);
    const [retweets, setRetweets] = useState(1);
    const [hasQuote, setHasQuote] = useState(false);
    const [quotes, setQuotes] = useState(1);

    const [tweetActions, setTweetActions] = useState({ retweets: 1, quotes: 1, likes: 1, views: 1 });
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
