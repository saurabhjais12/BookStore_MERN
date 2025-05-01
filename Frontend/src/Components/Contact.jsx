import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';

function Contact() {
  // State to manage form data
  const [formdata, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data as JSON to the server
      const response = await axios.post('https://bookstore-mern-jrsz.onrender.com/api/contact', formdata, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });

      console.log(response.data);
      toast.success("Message sent successfully!");

      // Reset form data after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact shadow-md mx-auto max-w-xl p-8 rounded">
        <h1 className="text-xl font-bold mb-4 pt-10">
          Contact <span className="text-[#5e0ce4]">Here</span>
        </h1>

        {/* Name input field */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formdata.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-white"
          required
        />

        {/* Email input field */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formdata.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-white"
          required
        />

        {/* Phone input field */}
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          value={formdata.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-white"
          required
        />

        {/* Message textarea */}
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Type here..."
          value={formdata.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-white"
          required
        ></textarea>

        {/* Submit button */}
        <button
          type="submit"
          className="px-4 py-2 w-24 bg-[#007bff] text-white rounded hover:bg-[#0056b3]"
        >
          Send
        </button>
      </form>

      {/* Toast notifications */}
      <ToastContainer />
    </>
  );
}

export default Contact;
