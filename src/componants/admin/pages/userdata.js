function countTodaysOrders(orders, state) {
  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

  // Filter orders placed today with status "new"
  const todaysNewOrders = orders.filter((order) => {
    const orderDate = new Date(order.createdAt); // Assuming there's a createdAt field in the order object
    orderDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
    return orderDate.getTime() === today.getTime() && order.status === state;
  });

  // Return the number of orders placed today with status "new"
  return todaysNewOrders.length;
}
function countYesterdaysNewOrders(orders, state) {
  // Get yesterday's date
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

  // Filter orders placed yesterday with status "new"
  const yesterdaysNewOrders = orders.filter((order) => {
    const orderDate = new Date(order.createdAt); // Assuming there's a createdAt field in the order object
    orderDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
    return (
      orderDate.getTime() === yesterday.getTime() && order.status === state
    );
  });

  // Return the number of orders placed yesterday with status "new"
  return yesterdaysNewOrders.length;
}

function calculateGrowthPercentage(yesterdayCount, todayCount) {
  // Check if yesterday's count is 0 to avoid division by zero
  if (yesterdayCount === 0) {
    // If yesterday's count is 0, growth percentage is either 100% (if today's count is also 0) or infinity (if today's count is non-zero)
    return todayCount === 0 ? "+0%" : "+∞";
  }

  // Calculate growth percentage
  const growthPercentage =
    ((todayCount - yesterdayCount) / yesterdayCount) * 100;
  const sign = growthPercentage >= 0 ? "+" : "-"; // Determine the sign
  const formattedPercentage =
    sign + Math.abs(growthPercentage).toFixed(2) + "%"; // Format the percentage with sign
  return formattedPercentage;
}
function getTodaysIncome(orders) {
  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

  // Filter completed orders placed today
  const todaysCompletedOrders = orders.filter((order) => {
    const orderDate = new Date(order.createdAt); // Assuming there's a createdAt field in the order object
    orderDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
    return (
      orderDate.getTime() === today.getTime() && order.status === "completed"
    );
  });

  // Calculate income for today
  const todaysIncome = todaysCompletedOrders.reduce(
    (total, order) => total + order.total,
    0
  );

  // Return today's income
  return "₹" + todaysIncome.toLocaleString("en-IN");
}

function getTotalIncome(orders) {
  // Filter completed orders
  const completedOrders = orders.filter(
    (order) => order.status === "completed"
  );

  // Calculate total income
  const totalIncome = completedOrders.reduce(
    (total, order) => total + order.total,
    0
  );

  // Return total income
  return "₹" + totalIncome.toLocaleString("en-IN");
}

module.exports = {
  getTotalIncome,
  getTodaysIncome,
  countTodaysOrders,
  countYesterdaysNewOrders,
  calculateGrowthPercentage,
};
