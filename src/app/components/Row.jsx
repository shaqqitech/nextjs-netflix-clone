"use client";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";





export default function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () =>{
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () =>{
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <div>
        <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
        <div className="relative flex items-center group">
          <MdChevronLeft
          onClick={slideLeft}
            size={40}
            className="bg-white left-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black hidden group-hover:block "
          />
          <div
            id={"slider" + rowID}
            className="w-full h-full overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth relative"
          >
            {movies.map((items, index) => {
              return <Movie key={index} items={items} />;
            })}
          </div>
          <MdChevronRight
          onClick={slideRight}
            size={40}
            className="bg-white right-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black hidden group-hover:block "
          />
        </div>
      </div>
    </>
  );
}
