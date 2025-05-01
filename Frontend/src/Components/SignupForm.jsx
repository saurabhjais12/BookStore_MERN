import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
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

    const { firstname, lastname, email, phone, password, re_password } = data;

    if (firstname && lastname && email && phone && password && re_password) {
      if (password === re_password) {
        try {
          const response = await axios.post("https://bookstore-mern-jrsz.onrender.com/api/SignUp", {
            firstname,
            lastname,
            email,
            phone,
            password,
            re_password
          });

          console.log(response.data);
          toast.success("Signup successful!");
          setData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            re_password: ""
          });
          navigate("/ThankYouSignUp");

        } catch (error) {
          console.error("Error:", error);
          toast.error("Error sending message");
        }
      } else {
        toast.error("Password and Re-entered password do not match");
      }
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="flex flex-col md:flex-row bg-base-200 rounded-xl shadow-md w-full max-w-5xl overflow-hidden">

        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Sign Up Here!</h1>
          <hr className="mb-6" />
          
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1 text-white">First Name</label>
              <input
                type="text"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">Email ID</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">Phone No.</label>
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">Re-Enter Password</label>
              <input
                type="password"
                name="re_password"
                value={data.re_password}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          <ToastContainer />
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/SignUp.jpg"
            alt="SignUp"
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};

export default SignupForm;
