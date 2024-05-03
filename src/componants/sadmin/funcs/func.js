function getOrderStatistics(orders) {
  try {
    // Get current date
    const currentDate = new Date();
    const todayDateString = currentDate.toISOString().split('T')[0];

    // Initialize variables to store statistics
    let totalEarnings = 0;
    let newCustomers = new Set();
    let todaysEarnings = 0;
    let todaysCompletedOrders = 0;
    let topAdminProcessingOrders = {};

    // Iterate over orders
    orders.forEach(order => {
      // Calculate total earnings
      totalEarnings += order.total;

      // Check if the order is from a new customer
      if (!newCustomers.has(order.customer)) {
        newCustomers.add(order.customer);
      }

      // Check if the order was placed today
      if (order.createdAt.includes(todayDateString)) {
        if (order.status === 'completed') {
          todaysCompletedOrders++;
          todaysEarnings += order.total;
        }
      }

      // Count top admin processing orders
      if (order.status === 'processing') {
        if (!topAdminProcessingOrders[order.customer]) {
          topAdminProcessingOrders[order.customer] = 1;
        } else {
          topAdminProcessingOrders[order.customer]++;
        }
      }
    });

    // Sort top admin processing orders
    const sortedTopAdminProcessingOrders = Object.entries(topAdminProcessingOrders)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3); // Get top 3

    // Total number of orders
    const totalOrders = orders.length;

    return {
      totalEarnings,
      newCustomers: newCustomers.size,
      todaysEarnings,
      todaysCompletedOrders,
      topAdminProcessingOrders: sortedTopAdminProcessingOrders,
      totalOrders
    };
  } catch (error) {
    console.log(error);
    return {
      error: 'An error occurred while processing orders.'
    };
  }
}

export default getOrderStatistics;
