import React, { useState } from 'react'
import BookMarkIcon from "../assets/images/icon-bookmark.svg"

const Bookmark = () => {

  const [check, setCheck] = useState(false)
  return (

    <div onClick={() => setCheck(!check)} className="flex group items-center -space-x-10 cursor-pointer">
      <div className={`${check ? ' bg-gray-600 ' : 'bg-moderate-cyan group-hover:bg-dark-cyan'} z-10 flex items-center justify-center rounded-full w-14 h-14`}>
        <img className='w-6 h-6' src={BookMarkIcon} alt="" />
      </div>
      <div className={`${check ? 'text-gray-600 bg-gray-200' : ' text-moderate-cyan hover:text-dark-cyan bg-gray-100'} font-semibold px-10 py-4 rounded-full cursor-pointer hidden md:flex`}>
        <span className=" translate-x-[14px]">{check ? 'Bookmark' : 'Bookmarked'}</span>
      </div>
    </div>
  )
}

export default Bookmark