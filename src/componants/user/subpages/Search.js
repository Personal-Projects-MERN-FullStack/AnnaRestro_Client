import React from 'react'
import { GiFoodTruck } from "react-icons/gi";
const Search = () => {
  return (
  
    <div class="flex items-center bg-gray-200 p-2 mx-3  w-11/12 rounded-full">
  <input type="text" placeholder="Search Foods........." class="w-full bg-transparent focus:outline-none"/>
  <GiFoodTruck className='text-2xl' />
</div>


  )
}

export default Search