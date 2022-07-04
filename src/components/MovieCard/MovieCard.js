import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const MovieCard = (props) => {
  return (
    <div className="w-40 md:w-52 bg-[#1A1A1A] rounded-b-lg">
      <div>
        <img src={props.image} alt="" />
        <div className="p-2">
          <div className="px-1.5 py-3">
            <p className="text-md text-white text-left truncate ...">{props.name}</p>
          </div>
          <button className="w-full px-2 py-2 rounded-md bg-gray-800 outline-none text-center items-center text-blue-500">
            <span className="flex items-center justify-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Watchlist
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
