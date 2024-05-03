function getUserOrdersSummary(orders, userId) {
    // Get today's date
    const today = new Date();
    const todayDateString = today.toISOString().split('T')[0];

    // Initialize variables to store the user's expenses today and total expenses
    let userExpensesToday = 0;
    let totalExpenses = 0;
    let totalOrdersByUser = 0;

    // Loop through the orders
    orders.forEach(order => {
        // Check if the order belongs to the user and if it's from today
        if (order.customer === userId && order.createdAt.includes(todayDateString)) {
            // Increment user's expenses today
            userExpensesToday += order.total;
        }
        // Increment total expenses
        
        // Check if the order belongs to the user
        if (order.customer === userId) {
            // Increment total orders by the user
            totalExpenses += order.total;
            totalOrdersByUser++;
        }
    });

    // Return the summary
    return {
        userExpensesToday,
        totalExpenses,
        totalOrdersByUser
    };
}
export default getUserOrdersSummary;