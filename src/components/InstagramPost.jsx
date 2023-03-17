import React, { useContext, useEffect, useState } from 'react'
import PP from "../assets/tw_default.png"
import IGLOGO from "../assets/ig.png"
import { instagramContext } from '../context/InstagramContext'

const InstagramPost = () => {


    const { username, profilePhoto, description, verified, activeStory, postText, photo, postActions, firstComment, secondComment,postTime } = useContext(instagramContext);

    const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
    const [postPhotoPreview, setPostPhotoPreview] = useState(null);


    const threeDot = <svg aria-label="Diğer seçenekler" className='rotate-90' color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5" /><circle cx="6" cy="12" r="1.5" /><circle cx="18" cy="12" r="1.5" /></svg>;
    const likeSVG = <svg aria-label="Beğen" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Beğen</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z" /></svg>
    const likeSmallSVG = <svg aria-label="Beğen" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Beğen</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z" /></svg>
    const commentSVG = <svg aria-label="Yorum Yap" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Yorum Yap</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" /></svg>;
    const shareSVG = <svg aria-label="Gönderi Paylaş" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Gönderi Paylaş</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083" /><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2" /></svg>
    const saveSVG = <svg aria-label="Kaydet" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Kaydet</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg>
    const verifiedSVG = <svg width="14" height="14" viewBox="0 0 24 24" aria-label="Doğrulanmış hesap"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" fill='#1da1f2' /></g></svg>;


    useEffect(() => {
        if (photo) {
            const reader = new FileReader();
            reader.readAsDataURL(photo);
            reader.onload = () => {
                setPostPhotoPreview(reader.result)
            }
        }
    }, [photo])


    useEffect(() => {
        if (profilePhoto) {
            const reader = new FileReader();
            reader.readAsDataURL(profilePhoto);
            reader.onload = () => {
                setProfilePhotoPreview(reader.result)
            }
        }
    }, [profilePhoto])

  
    console.log(verified)

    return (
        <div id='ig-component' className='w-[400px] flex flex-col bg-white  rounded-sm text-[#262626]'>
            <div className='w-full items-center flex py-[14px] px-[16px]'>
                {/* <div className='w-[42px] h-[42px] relative  flex item-center justify-center mr-[7px]'>
                    <img src={IGLOGO} alt="bg" className='w-[37px] h-[37px] rounded-full absolute top-[2.5px] left-[2.5px] ' />
                    <div className='w-[42px] h-[42px] flex items-center justify-center'>
                    <div className='z-10 w-[34.5px] h-[34.5px] flex items-center justify-center bg-white rounded-full  '>
                        <img src={PP} alt="pp" className='w-[32px] h-[32px] rounded-full z-20' />
                    </div>
                    </div>
                </div> */}

                <img src={profilePhotoPreview ? profilePhotoPreview : PP} alt="pp" className=' w-[32px] h-[32px] rounded-full z-20 mr-[12px]' />

                <div className='flex flex-1 justify-between'>
                    <div className='flex flex-col'>
                        <b className='text-[14px] text-[#262626] leading-[18px] font-bold flex items-center'>
                            {username} {JSON.parse(verified)=== true ? <span className='p-[1px]'>{verifiedSVG}</span> : null}
                        </b>
                        <small className='text-[12px] leading-[15px] '>
                            {description}
                        </small>
                    </div>
                    {threeDot}
                </div>
            </div>
            <img className='w-full max-h-[400px]' src={postPhotoPreview ? postPhotoPreview : 'https://upload.wikimedia.org/wikipedia/commons/1/14/Randall_Packer_400x400.jpg'} alt='post-image' />
            <div className='py-[18px] px-[16px]'>
                <div className='pb-[16px] w-full flex justify-between leading-[16px]'>
                    <div className='flex gap-[16px] '>
                        {likeSVG}
                        {commentSVG}
                        {shareSVG}
                    </div>
                    {saveSVG}
                </div>
                <div className='w-full font-semibold text-[14px] leading-[18px]'>
                    {Number(postActions.likes).toLocaleString("tr-TR")} likes
                </div>
                <div className='mt-[8px] mb-[4px] text-[14px] leading-[18px]' >
                    <span className='font-semibold float-left mr-[1ch]'>{username}</span><div dangerouslySetInnerHTML={{__html: postText}}  />
                </div>
                <div className='text-[#8E8E8E] text-[14px] leading-[18px]'>
                    View all {Number(postActions.comments).toLocaleString("tr-TR")} comments
                </div>
                <div className='flex w-full justify-between mt-[4px] mb-[4px] text-[14px] leading-[18px]'>
                    <div className='flex-1 '>
                        <span className='font-semibold'>{firstComment.username}</span> {firstComment.text}
                    </div>
                    <div className='w-[20px] flex pl-[8px] pt-[1px] pr-[1px]'>
                        {likeSmallSVG}
                    </div>
                </div>
                <div className='flex w-full justify-between mt-[4px] mb-[4px] text-[14px] leading-[18px]'>
                    <div className='flex-1 '>
                        <span className='font-semibold'>{secondComment.username}</span> {secondComment.text}
                    </div>
                    <div className='w-[20px] flex pl-[8px] pt-[1px] pr-[1px]'>
                        {likeSmallSVG}
                    </div>
                </div>
                <div className='w-full mt-[8px] mb-[4px] text-[10px] leading-[17px] tracking-[0.2px] uppercase text-[#8E8E8E]'>
                    {postTime}
                </div>
            </div>
        </div>
    )
}

export default InstagramPost
