import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { logout } = useAuth();
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch the CSRF token from the backend
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get("http://localhost:3000/csrf-token", {
          withCredentials: true,
        });
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/logout",
        {},
        {
          headers: {
            "CSRF-Token": csrfToken, // Include the CSRF token in the headers
          },
          withCredentials: true,
        }
      );
      toast.success("Logout successful!");
      logout();
    } catch (error) {
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
      >
        Logout
      </button>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
