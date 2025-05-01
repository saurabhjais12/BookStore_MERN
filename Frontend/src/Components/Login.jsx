import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    re_password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, re_password } = data;
    if (email && password && re_password) {
      if (password === re_password) {
        try {
          const response = await axios.post("http://localhost:4001/api/Login", {
            email,
            password
          });

          console.log(response.data);

          if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
          } else {
            toast.error("No token received from server");
            return;
          }

          toast.success("Login successful!");
          setData({ email: "", password: "", re_password: "" });
          navigate("/");
        } catch (error) {
          console.error("Error:", error);
          toast.error("Error during login");
        }
      } else {
        toast.error("Passwords do not match");
      }
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="flex flex-col md:flex-row bg-base-200 rounded-xl shadow-md w-full max-w-5xl overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">LOGIN !!</h1>
          <hr className="mb-6" />

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="re_password" className="block text-sm font-medium text-gray-700">Re-Password:</label>
              <input
                type="password"
                name="re_password"
                id="re_password"
                value={data.re_password}
                onChange={handleChange}
                placeholder="Re-enter your Password"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-sm text-center">
              Not Registered?{" "}
              <a href="/SignupForm" className="text-blue-600 hover:underline">Sign Up</a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/Login.jpg"
            alt="Login"
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};

export default Login;
