import React from "react";

import { useTypewriter } from "react-simple-typewriter";

const Search = ({ onSearchChangeHandler }) => {
  const  text  = useTypewriter({
    words: ["plain Dosa", "Idli Sambar", "Poha"],
    loop: true, // Optional: whether to loop through the words
    delaySpeed: 2000, // Optional: delay between words
  });
  
  return (
    <div className="flex items-center bg-gray-200 p-2 mx-3  w-11/12 rounded-full">
      <input
        onChange={onSearchChangeHandler}
        type="text"
        placeholder={`serach for ${text[0]}`}
        className="w-full bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default Search;
