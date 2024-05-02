import React from "react";

const RegisterAdminForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/admin/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to register admin");
      }
      
      
      alert("Admin registered successfully!");
      // Optionally, reset the form fields after successful registration
    } catch (error) {
      console.error("Error registering admin:", error.message);
      alert("Failed to register admin. Please try again later.");
    }
  };

  return (
    <div className="my-2 rounded-2xl flex justify-center items-center flex-col">
      <div className="my-2 text-green-800 font-bold text-xl">ADD NEW ADMIN</div>
      <form onSubmit={handleSubmit} className="space-x-2 px-8 pt-6 pb-8 mb-4 flex justify-around">
        <div className="mb-4 flex">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-4 flex">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-4 flex">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div className="mb-4 flex">
          <input 
            className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
            value="ADD ADMIN"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterAdminForm;

