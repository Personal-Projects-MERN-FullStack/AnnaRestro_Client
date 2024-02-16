import React from 'react'

const OrderListItem = ({item_name , price}) => {
  return (
    <div className="flex w-full h-8  ">
    <div className="w-8/12  font-semibold  h-full flex justify-start items-center px-2">
      <li>{item_name}</li>
    </div>
    <div className="flex justify-center items-center  w-4/12 h-full ">
    ₹{price}
    </div>
  </div>
  )
}

export default OrderListItem