import React, { useContext, useRef } from 'react'
import domtoimage from 'dom-to-image';
import { instagramContext } from '../context/InstagramContext';

const IgPostEditTool = () => {

    const profilePhotoRef = useRef(null);
    const postPhotoRef = useRef(null);

    const {verified,setUsername,setDescription,setVerified,setActiveStory,setProfilePhoto,setPostText,setPhoto,setPostActions,postActions,setFirstComment,setSecondComment,firstComment,secondComment,setPostTime} = useContext(instagramContext);



    const takeScreenshot = () => {
        const el = document.getElementById('ig-component');
        domtoimage.toBlob(el).then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'my-component.png';
            link.href = url;
            link.click();
        });
    }


    const handlePostText = (e) => {
        let newText=(e.target.value)
        .replace(/@([\w]+)/g, '<span class="text-twitterBlue">@$1</span>')
        .replace(/#([\wşçöüuıİ]+)/gi, '<span class="text-twitterBlue">#$1</span>')
        .replace(/(https?:\/\/[\w\.\/]+)/, '<span class="text-twitterBlue">$1</span>');
        setPostText(newText)
    }

    return (
        <div  className='flex flex-col gap-5 p-5 '>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' htmlFor='name'>
                Profile Photo:
                <button onClick={() => profilePhotoRef.current.click()} className={`bg-gray-400  px-2 py-1 rounded-lg w-[300px]`}>Choose a Profile Photo</button>
                <input onChange={(e) => setProfilePhoto(e.target.files[0])} ref={profilePhotoRef} className='hidden text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="file" id="photo" name="photo" accept=".jpg, .jpeg, .png" />
            </label>
            <div className='flex items-center gap-5'>
                <label className='flex items-center gap-4 w-full justify-between text-white text-[14px]'>
                    Verified
                    <select onChange={(e) => setVerified(e.target.value)} value={verified} className='w-[300px] text-black px-2 py-1 rounded-lg text-[14px]'>
                        <option value={false}>No Verified</option>
                        <option value={true}>Verified</option>
                    </select>
                </label>
                {/* <label className='flex whitespace-nowrap items-center gap-4 w-full justify-between text-white text-[14px]'>
                    Active Story:
                    <select className='w-[120px] text-black px-2 py-1 rounded-lg text-[14px]'>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </label> */}
            </div>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' htmlFor='username'>Username: <input placeholder='johndoe' onChange={(e) => setUsername(e.target.value)} className='text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="text" id="username" /></label>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' htmlFor='description'>Description: <input placeholder='New York, USA' onChange={(e) => setDescription(e.target.value)} className='text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="text" id="description" /></label>
            <label className='flex w-full justify-between gap-4 items-start  text-[14px] text-white' htmlFor='post-text'>Post Text: <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' onChange={(e) => handlePostText(e)} className='text-[14px] text-black px-2 py-1 rounded-lg w-[350px] max-h-[125px] min-h-[75px]' type="text" id="post-text" /></label>
            <label className='flex w-full justify-between gap-4 items-center text-[14px] text-white' >
                Post Photo:
                <button onClick={() => postPhotoRef.current.click()}  className={`bg-gray-400 px-2 py-1 rounded-lg w-[300px]`}>Choose a photo</button>
                <input ref={postPhotoRef} onChange={(e) => setPhoto(e.target.files[0]) } className='hidden text-[14px] text-black px-2 py-1 rounded-lg w-[350px]' type="file" id="photo" name="photo" accept=".jpg, .jpeg, .png" />
            </label>
            <div className='flex items-center gap-5'>
                <label className='flex items-center gap-4 w-full justify-between text-white text-[14px]'>
                    Photo Count:
                    <select  className='w-[50px] text-black px-2 py-1 rounded-lg text-[14px]'>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </label>
                <label htmlFor='ig-post-time' className='whitespace-nowrap flex items-center gap-4 w-full justify-between text-white text-[14px]'>
                    Post Time:
                    <input placeholder='2 MINUTES AGO' onChange={(e) => setPostTime(e.target.value)} id='ig-post-time' type="text" className='w-[200px] text-black px-2 py-1 rounded-lg text-[14px]' />
                </label>
            </div>
            <div className='flex items-center gap-5'>
                <label htmlFor='ig-comments' className='flex items-center gap-4 w-full justify-between text-white text-[14px]'>
                    Comments
                    <input placeholder='231' onChange={(e) =>setPostActions({...postActions,comments:e.target.value}) } min={0} id='ig-comments' type="number" className='w-[120px] text-black px-2 py-1 rounded-lg text-[14px]' />
                </label>
                <label onChange={(e) =>setPostActions({...postActions,likes:e.target.value}) } htmlFor='ig-likes' className='flex whitespace-nowrap items-center gap-4 w-full justify-between text-white text-[14px]'>
                    Likes:
                    <input placeholder='421' min={0} id='ig-likes' type="number" className='w-[120px] text-black px-2 py-1 rounded-lg text-[14px]' />
                </label>
            </div>
            <div className='flex flex-col justify-center gap-5 '>
                <label htmlFor='first-comment' className='flex items-center gap-2 w-full justify-between text-white text-[14px]'>
                    1st Comment:
                    <input onChange={(e) => setFirstComment({...firstComment,username:e.target.value}) } id='first-comment' placeholder='Username' type="text" className='w-[120px] text-black px-2 py-1 rounded-lg text-[14px]' />
                    <input onChange={(e) => setFirstComment({...firstComment,text:e.target.value}) } id='first-comment' placeholder='Comment Text' type="text" className='w-[180px] text-black px-2 py-1 rounded-lg text-[14px]' />
                </label>
                <label htmlFor='second-comment' className='flex items-center gap-2 w-full justify-between text-white text-[14px]'>
                    2nd Comment:
                    <input onChange={(e) => setSecondComment({...secondComment,username:e.target.value}) } id='second-comment' placeholder='Username' type="text" className='w-[120px] text-black px-2 py-1 rounded-lg text-[14px]' />
                    <input onChange={(e) => setSecondComment({...secondComment,text:e.target.value}) } id='second-comment' placeholder='Comment Text' type="text" className='w-[180px] text-black px-2 py-1 rounded-lg text-[14px]' />
                </label>
            </div>
            <button value="Download" onClick={takeScreenshot} className='bg-purple-400 px-2 py-1 w-full font-bold text-white rounded-lg'>Create and Download</button>
        </div >
    )
}

export default IgPostEditTool
