import { useQuery } from "@tanstack/react-query";
import React from "react";
async function fetchproduct() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/menu/getmenu`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch orders data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    throw error;
  }
}

const ProductTable = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchproduct,
    refetchInterval: 5000,
  });
  console.table(products)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (isError) {
    return <div>Error fetching orders</div>;
  }

  return (
    <div class="relative overflow-x-auto">
    <table className="w-full text-sm text-left border rounded-2xl rtl:text-right text-gray-500 dark:text-gray-400">
       <thead className="text-xs text-gray-700 rounded-2xl uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
           <th scope="col" className="px-6 py-3">
            Id
           </th>
           <th scope="col" className="px-6 py-3">
            Name
           </th>
           <th scope="col" className="px-6 py-3">
             Price
           </th>
           <th scope="col" className="px-6 py-3">
            Qty
           </th>
           <th scope="col" className="px-6 py-3">
            Category
           </th>
           <th scope="col" className="px-6 py-3">
             Type
           </th>
         </tr>
       </thead>
       <tbody>
       {products.map((prod)=>{
         return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
         <th
           scope="row"
           class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
         >
          #{prod._id}
         </th>
         <td class="px-6 py-4 text-center">{prod.productName}</td>
         <td class="px-6 py-4 text-center">₹{prod.price}</td>
         <td class="px-6 py-4 text-center">{prod.productQty}</td>
         <td class="px-6 py-4 text-center">{prod.category}</td>
         <td class="px-6 py-4 text-center">{prod.typeOfMenu}</td>
       </tr>
     )
       })}
       </tbody>
     </table>

 </div>);
};

export default ProductTable;
