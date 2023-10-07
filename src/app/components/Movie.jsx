'use client'
import React, { useState } from 'react'
import Image from "next/image";
import {FaHeart, FaRegHeart} from 'react-icons/fa'


function Movie({items}) {
    const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-4 relative">
    <Image
      src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
      alt={'Netflix Movie'}
      width={10} // no use, only for next js requirement
      height={10} // no use, only for next js requirement
      sizes="100%"
      className="w-full h-full object-cover block"
    />
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
      <p className="whitespace-normal h-full flex justify-center items-center text-center text-xs md:text-sm">{items?.title}</p>
      <p>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
    </div>
  </div>
  )
}

export default Movie