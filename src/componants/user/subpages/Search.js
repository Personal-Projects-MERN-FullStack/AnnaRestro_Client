import React from "react";
import { GiFoodTruck } from "react-icons/gi";

import { useTypewriter } from "react-simple-typewriter";

const Search = ({ onSearchChangeHandler }) => {
  const placeholderval = useTypewriter({
    words: ["plain Dosa", "Idli Sambar", " Poha", "Butter Plain Dosa"],
    loop:true
  });
  return (
    <div class="flex items-center bg-gray-200 p-2 mx-3  w-11/12 rounded-full">
      <input
        onChange={onSearchChangeHandler}
        type="text"
        placeholder={`${placeholderval}`}
        class="w-full bg-transparent focus:outline-none"
      />
      <GiFoodTruck className="text-2xl" />
    </div>
  );
};

export default Search;
