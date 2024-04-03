import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const useOrders = () => {
  const user = useSelector((state) => state.auth.user);

  async function fetchOrders() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/orders/${user.user.id}`,
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

  return useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    refetchInterval: 5000,
  });
};

export default useOrders;
