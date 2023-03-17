import React, { useState } from 'react'

export const instagramContext = React.createContext();

const InstagramContext = (props) => {

    const [profilePhoto, setProfilePhoto] = useState(null);
    const [username, setUsername] = useState("johndoe");
    const [description, setDescription] = useState("New York, USA");
    const [verified, setVerified] = useState(true);
    const [activeStory, setActiveStory] = useState(false);
    const [postText, setPostText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const [postTime, setPostTime] = useState("2 MINUTES AGO");
    const [photo, setPhoto] = useState(null);
    const [postActions, setPostActions] = useState({ likes: 2452, comments: 142 });
    const [firstComment, setFirstComment] = useState({ username: "janedoe", text: "<3" });
    const [secondComment, setSecondComment] = useState({ username: "richardroe", text: "cool" });


    const values = {
        profilePhoto,
        setProfilePhoto,
        username, setUsername,
        description,
        setDescription,
        verified,
        setVerified,
        activeStory,
        setActiveStory,
        postText,
        setPostText,
        photo,
        setPhoto,
        postActions,
        setPostActions,
        firstComment,
        setFirstComment,
        secondComment,
        setSecondComment,
        postTime,
        setPostTime
    };

    return (
        <instagramContext.Provider value={values}>
            {props.children}
        </instagramContext.Provider>
    )
}

export default InstagramContext
