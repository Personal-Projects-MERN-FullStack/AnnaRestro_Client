import React from 'react'

const Status = ({order}) => {
  return (
    <div>
         {order.status === "new" ||
          order.status === "completed" ||
          order.status === "pending" ||
          order.status === "cancelled" ||
          order.status === "ready" ? (
            // Set the statusOfOrder to the JSX element

            <div className="flex space-x-4 items-center">
              <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <h2 className="text-lg font-medium text-gray-800 line-through">
                Order asdf
              </h2>
            </div>
          ) : (
            <div class="flex space-x-4 items-center">
              <div class="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
                <span class="text-white text-sm font-bold">3</span>
              </div>
              <h2 class="text-lg font-medium text-gray-800">Order Placed</h2>
            </div>
          )}


    </div>
  )
}

export default Status