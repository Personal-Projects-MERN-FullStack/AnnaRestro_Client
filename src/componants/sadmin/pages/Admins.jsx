import { useQuery } from "@tanstack/react-query";
import React from "react";
import Tablerow from "../Componants/subcomponants/Tablerow";
import RegisterAdminForm from "../Componants/RegisterAdminForm";

const Admins = () => {
  async function fetchOrders() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/admins`,
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

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching orders:", error.message);
      throw error;
    }
  }

  const admins = useQuery({
    queryKey: ["admins"],
    queryFn: fetchOrders,
    refetchInterval: 5000,
  });

  return (
    <div>
      <div className="relative overflow-x-auto p-4 rounded-2xl">
        <table className="w-full text-sm text-left border rounded-2xl rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 rounded-2xl uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                UserName
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {!admins.isLoading && admins.data && admins.data.length > 0 ? (
              admins.data.map((data) => <Tablerow key={data._id} data={data} />)
            ) : (
              <tr>
                <td colSpan="4">No data</td>
              </tr>
            )}
          </tbody>
        </table>

        <RegisterAdminForm />
      </div>
    </div>
  );
};

export default Admins;