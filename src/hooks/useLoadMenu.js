import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDispatch } from "react-redux";
import { setMenu } from "../store/actions/Menu-actions";

const useLoadMenu = () => {
  const dispatch = useDispatch();
  async function fetchMenu() {
    try {
      const response = await fetch("http://localhost:5000/menu/getmenu", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        // You can add credentials like cookies, etc. if necessary
        credentials: "same-origin",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching menu:", error.message);
      throw error;
    }
  }
  const menu = useQuery({
    queryKey: ["testing"],
    queryFn: fetchMenu,
    refetchInterval: 10000,
  });

  dispatch(setMenu({data:menu.data,isloading:menu.isLoading}));
};

export default useLoadMenu;
