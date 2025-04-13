// pages/Profile.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData")) || {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    joined: "2023-04-01",
    avatar: "https://i.pravatar.cc/150?img=10", 
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-screen h-screen bg-white shadow-lg rounded-2xl p-15 max-w-md w-full text-center">
        <img
          src={user.avatar}
          alt="User avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
        />
        <h2 className="mt-4 text-2xl font-bold text-green-800">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <p className="text-gray-500 mt-1">{user.phone}</p>
        <p className="text-sm text-red-400 mt-2">Joined on {user.joined}</p>

        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={() => alert("Edit profile coming soon!")}
            className="!bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="!bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
