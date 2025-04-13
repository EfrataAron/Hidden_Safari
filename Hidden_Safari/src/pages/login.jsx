import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      // Store fake token and user data
      localStorage.setItem("authToken", "12345");
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: "Admin User",
          email: "admin@example.com",
          phone: "123-456-7890",
          joined: new Date().toISOString().split("T")[0],
          avatar: "https://i.pravatar.cc/150?img=10",
        })
      );

      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="p-8 bg-gray-100 rounded shadow-md">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="!bg-green-500 text-black p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     localStorage.setItem("authToken", "12345"); // Store a fake token
//     navigate("/home"); // Redirect to home
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h2 className="text-blue-500 text-2xl font-bold">Welcome!</h2>
//       <button className="bg-blue-500! text-white"
//         onClick={handleLogin} 
//         // className="bg-red-500 text-black px-4 py-2 mt-4 rounded"
//       >
//        Login
//       </button>
//     </div>
//   );
// };

// export default Login;
