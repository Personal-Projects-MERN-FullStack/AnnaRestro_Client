import React from "react";
import { useNavigate } from "react-router";
function formatDate(dateString) {
  const date = new Date(dateString);

  // Format the date
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // Format the time
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get AM/PM
  const ampm = date.getHours() >= 12 ? "" : "";

  // Combine date, time, and AM/PM
  const formattedDateTime = `${formattedDate} ${formattedTime} ${ampm}`;

  return formattedDateTime;
}
function calculateTimeAgo(changedTime) {
  // Parse the changed time string to Date object
  const changedDate = new Date(changedTime);

  // Get the current time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - changedDate.getTime();

  // Convert milliseconds to seconds
  const secondsDifference = Math.floor(timeDifference / 1000);

  // Calculate the time difference in minutes, hours, days, etc.
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  // Return a formatted string indicating the time difference
  if (daysDifference > 0) {
    return `${daysDifference} days ago`;
  } else if (hoursDifference > 0) {
    return `${hoursDifference} hours ago`;
  } else if (minutesDifference > 0) {
    return `${minutesDifference} minutes ago`;
  } else {
    return "Just now";
  }
}

// Example usage:
const originalDate = "2024-04-18T18:45:10.950Z";
const formattedDate = formatDate(originalDate);
console.log(formattedDate); // Output: "04/18/2024 06:45 PM"

const NotificationItem = ({ noti }) => {
  const navigate = useNavigate()
  return (
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto w-full cursor-pointer " onClick={()=>navigate(`/orders/status/${noti.orderId}`)}>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">Notification</h2>
        <span class="text-gray-500 text-sm">{formatDate(noti.timestamp)}</span>
      </div>
      <div class="mb-4">
        <p class="text-gray-600">
          <span class="font-semibold">Order ID:</span> {noti.orderId}
        </p>
        <p class="text-gray-600">
          <span class="font-semibold">Date:</span> {formatDate(noti.timestamp)}
        </p>
        <p class="text-gray-600">
          <span class="font-semibold">Message:</span> Your order has been{" "}
          {noti.newState === "new" ? "Placed" : noti.newState}.
        </p>
        <p class="text-gray-600">
          <span class="font-semibold">Order State:</span> {noti.previousState}{" "}
          =={">"}{" "}
          <span className="text-green-800 font-semibold">{noti.newState}</span>
        </p>
      </div>
      <div class="flex justify-end">
        <span class="text-gray-500 text-sm">
          Notification changed {calculateTimeAgo(noti.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default NotificationItem;
