import React from "react";

const Tablerow = ({ data }) => {
  console.log(data)
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.username}
      </th>
      <td className="px-6 py-4 text-center">{data.email}</td>
      <td className="px-6 py-4 text-center">Deactivate/activate</td>
      <td className="px-6 py-4 text-center text-red-900 text-underline cursor-pointer font-semibold">
        Report
      </td>
    </tr>
  );
};

export default Tablerow;
