import React, { useContext, useEffect, useState } from 'react'
import PP from "../assets/tw_default.png";
import { tweetContext } from '../context/TweetContext';



const Tweet = () => {

    const { name, username, tweet, verified, photoTweet, tweetTime, photo, profilePicture, tweetActions, tweetActionsStatus,setTweet } = useContext(tweetContext);

    const [tweetPhotoPreview, setTweetPhotoPreview] = useState(null)
    const [profilePicturePreview, setProfilePicturePreview] = useState(null)

    const yellowVerified = <svg className='w-[15px]' viewBox="0 0 22 22" aria-label="Onaylanmış hesap" role="img" data-testid="icon-verified"><g><linearGradient gradientUnits="userSpaceOnUse" id="a" x1="4.411" x2="18.083" y1="2.495" y2="21.508"><stop offset="0" stopColor="#f4e72a" /><stop offset=".539" stopColor="#cd8105" /><stop offset=".68" stopColor="#cb7b00" /><stop offset="1" stopColor="#f4ec26" /><stop offset="1" stopColor="#f4e72a" /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="b" x1="5.355" x2="16.361" y1="3.395" y2="19.133"><stop offset="0" stopColor="#f9e87f" /><stop offset=".406" stopColor="#e2b719" /><stop offset=".989" stopColor="#e2b719" /></linearGradient><g clipRule="evenodd" fillRule="evenodd"><path d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#a)" /><path d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#b)" /><path d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z" fill="#d18800" /></g></g></svg>;
    const blueVerified = <svg className='w-[15px]' viewBox="0 0 22 22" aria-label="Onaylanmış hesap" role="img" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0" /></g></svg>

    const readTweetPhoto = () => {
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onload = () => {
            setTweetPhotoPreview(reader.result)
        }
    }

    const readProfilePicture = () => {
        const reader = new FileReader();
        reader.readAsDataURL(profilePicture);
        reader.onload = () => {
            setProfilePicturePreview(reader.result)
        }
    }

    useEffect(() => {
        if (photo) {
            readTweetPhoto();
        }
    }, [photo])

    useEffect(() => {
        if (profilePicture) {
            readProfilePicture();
        }
    }, [profilePicture])



    const months = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağus", "Eyl", "Ek", "Kas", "Ara"];


    return (
        <div id="tweet-component" className='bg-twitterDim w-[598px] border-[#38444D] border-[2px] rounded-xl px-[16px] py-[12px]'>
            <div className='flex items-center gap-[12px] mb-[4px]'>
                <img src={profilePicturePreview ? profilePicturePreview : PP} alt="profile picture" className={`w-[48px] h-[48px] ${verified === "yellow" ? "rounded-[4px]" : "rounded-full"} `} />
                <div className='flex items-center justify-between w-full h-[48px]'>
                    <div className='w-full'>
                        <div className='flex items-center justify-between w-full h-[20px]'>
                            <div>
                                <b className='text-[#f7f9f9] text-[15px] leading-[20px] font-tweet font-bold flex items-center gap-[3px]'>{name} {verified === "yellow" ? yellowVerified : verified === "blue" ? blueVerified : null}</b>
                            </div>
                            <div className='text-[#8b98a5] flex w-[34.75px] h-[34.75px] items-center justify-center rounded-full'>
                                <svg className='w-[18.75px] h-[18.75px]' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill='#8b98a5' /></g></svg>
                            </div>
                        </div>
                        <b className="text-[#8b98a5] text-[15px] leading-[20px] font-tweet ">@{username}</b>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <p className='pt-[11px] text-[17px] font-tweet leading-[20px] text-[#f7f9f9] whitespace-pre-wrap' dangerouslySetInnerHTML={{__html: tweet}} />

            </div>
            {photoTweet &&
                <div className='w-[566px] h-[530px] flex items-end '>
                    {photo && <img src={tweetPhotoPreview} alt='post_image' className='w-[564px] h-[516px] rounded-2xl border-[1px] border-[#38444D]' />}
                </div>
            }
            <div className='py-[16px] flex items-center'>
                <small className='text-[15px] text-[#8b98a5]'>
                    {tweetTime.hour > 11 ? 'ÖS' : "ÖÖ"} {tweetTime.hour > 11 ? tweetTime.hour - 12 : tweetTime.hour}:{tweetTime.minute} · {tweetTime.day} {months[tweetTime.month - 1]} {tweetTime.year}
                </small>
                <small className='w-[11px] flex justify-center text-[15px] text-[#8b98a5]'>·</small>
                <small className='text-[14px] text-[#8b98a5]'><span className='font-bold text-[15px] text-[#f7f9f9]'>{tweetActions.views < 10000 ? Number(tweetActions.views).toLocaleString('tr-TR') : (tweetActions.views / 1000).toFixed(1) + "B"}</span> Görüntülenme</small>
            </div>
            <div className='py-[16px] px-[4px] gap-[20px] flex items-center border-t-[1px] border-[#38444D]'>
                {tweetActionsStatus.retweet && <small className='text-[14px] leading-[16px] flex items-center gap-[4px] text-[#8b98a5]'><span className='font-bold text-[#f7f9f9]'>{tweetActions.retweets < 10000 ? Number(tweetActions.retweets).toLocaleString('tr-TR') : (tweetActions.retweets / 1000).toFixed(1) + "B"}</span>Retweet</small>}
                {tweetActionsStatus.quote && <small className='text-[14px] leading-[16px] flex items-center gap-[4px] text-[#8b98a5]'><span className='font-bold text-[#f7f9f9]'>{tweetActions.quotes < 10000 ? Number(tweetActions.quotes).toLocaleString('tr-TR') : (tweetActions.quotes / 1000).toFixed(1) + "B"}</span> Alıntılar</small>}
                {tweetActionsStatus.like && <small className='text-[14px] leading-[16px] flex items-center gap-[4px] text-[#8b98a5]'><span className='font-bold text-[#f7f9f9]'>{tweetActions.likes < 10000 ? Number(tweetActions.likes).toLocaleString('tr-TR') : (tweetActions.likes / 1000).toFixed(1) + "B"}</span> Beğeni</small>}
                {tweetActionsStatus.like === false && tweetActionsStatus.retweet === false && tweetActionsStatus.quote === false && <small className='text-[15px] leading-[20px] flex items-center gap-[4px] text-[#8b98a5]'><svg className='w-[18.75px] h-[18.75px]' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" fill='#8b98a5' /></g></svg> Tweet istatistiklerini görüntüle</small>}
            </div>
            <div className='flex justify-around border-y-[1px] px-[4px] h-[48px] border-[#38444D]'>
                <svg className='w-[22.5px]' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" fill='#8b98a5' /></g></svg>
                <svg className='w-[22.5px]' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" fill='#8b98a5' /></g></svg>
                <svg className='w-[22.5px]' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" fill='#8b98a5' /></g></svg>
                <svg className='w-[22.5px]' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" fill='#8b98a5' /></g></svg>
            </div>
        </div>
    )
}

export default Tweet