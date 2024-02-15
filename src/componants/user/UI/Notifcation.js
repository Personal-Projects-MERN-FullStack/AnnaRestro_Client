import React, { useState } from 'react'

const Notifcation = () => {
    const [show, setshow] = useState(true)
  return (
    
<>

{show && 
    <div id="toast-undo" class="flex fixed m-2 top-0 right-0 items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div class="text-sm font-normal">
           Item Added to cart
        </div>
        <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
            <a href ="a"class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="#" onClick={()=>{setshow(false)}}>Undo</a>
            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
            <span class="sr-only" onClick={()=>{setshow(false)}}>Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
        </div>
    </div>}



    </>
  )
}

export default Notifcation