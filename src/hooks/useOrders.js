import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    refetchInterval: 5000,
    // Add user as a dependency
    enabled: !!user, // Only enable the query when user is truthy
  });
  
  // Trigger refetch when user changes
  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  return { data, isLoading, error, refetch };
};

export default useOrders;
