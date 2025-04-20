// pages/Profile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      joined: "2023-04-01",
      avatar: "https://i.pravatar.cc/150?img=10", 
    }
  );
  
  const [formData, setFormData] = useState({...userData});

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const handleOpenEdit = () => {
    setFormData({...userData});
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    localStorage.setItem("userData", JSON.stringify(formData));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-screen h-screen min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-screen h-screen bg-white shadow-lg rounded-2xl p-15 max-w-md w-full text-center">
        <img
          src={userData.avatar}
          alt="User avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
        />
        <h2 className="mt-4 text-2xl font-bold text-green-800">{userData.name}</h2>
        <p className="text-gray-500">{userData.email}</p>
        <p className="text-gray-500 mt-1">{userData.phone}</p>
        <p className="text-sm text-red-400 mt-2">Joined on {userData.joined}</p>

        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={handleOpenEdit}
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

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
                  Avatar URL
                </label>
                <input
                  type="url"
                  id="avatar"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formData.avatar && (
                  <div className="mt-2">
                    <img 
                      src={formData.avatar} 
                      alt="Avatar preview" 
                      className="w-16 h-16 rounded-full mx-auto"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="!bg-green-200 hover:bg-gray-600 text-red-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="!bg-green-200 hover:bg-green-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
