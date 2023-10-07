"use client";
import React, { lazy, useEffect, useState } from "react";
import request from "../Request";
import axios from "axios";
import Image from "next/image";

export default function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movies);

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const stringSlice = (str, num) =>{
    if(str?.length > num){
      return str.slice(0, num) + '...';
    }else{
      return str
    }
  }


  return (
    <>
      <div className="min-w-screen h-[550px] text-white">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <div className="w-full h-full ">
          <Image
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={'Netflix Movie'}
            width={10} // no use, only for next js requirement
            height={10} // no use, only for next js requirement
            sizes="100vw"
            priority={lazy}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8 space-y-4" >
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.name}</h1>
            <div className="space-y-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white ml-4 border-gray-300 py-2 px-5">
                Watch Later
              </button>
              <p className="text-gray-400 text-sm">Released: {movie?.first_air_date}</p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{stringSlice(movie?.overview, 150)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
