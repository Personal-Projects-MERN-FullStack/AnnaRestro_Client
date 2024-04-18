import React from 'react'
import OrdersTable from '../Componants/OrdersTable'

const OdersData = () => {
  return (
    <div>
         <div className=" font-bold text-yellow-300 h-12 my-4 flex justify-start items-center pl-4 text-3xl">
        Orders Data
      </div>
      <div><OrdersTable/></div>
    </div>
  )
}

export default OdersData