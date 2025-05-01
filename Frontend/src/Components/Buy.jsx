import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
    phone: "",
    productName: location.state?.productName || "",
    price: location.state?.price || "",
    quantity: 1,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://bookstore-mern-jrsz.onrender.com/api/OrderBuy", formData, {
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.status === 200 || response.status === 201) {
        toast.success("Order placed successfully!");
        const submittedData = { ...formData };
        setFormData({
          name: "",
          state: "",
          city: "",
          address: "",
          pincode: "",
          phone: "",
          productName: "",
          price: "",
          quantity: 1,
        });
        navigate("/thankyou", { state: { orderDetails: submittedData } });
      } else {
        toast.error("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred while placing the order:", error);
      toast.error("An error occurred while placing the order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 shadow-2xl rounded-2xl p-8 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left Side - Customer Details */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-500 text-center">
            Customer Details
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Full Address"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>

            <input
              type="number"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              maxLength="6"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              maxLength="10"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-500 text-center">
            Product Details
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              name="productName"
              value={formData.productName}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <input
              type="number"
              name="price"
              value={formData.price}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            />

            <div className="bg-purple-100 p-5 rounded-xl shadow-md text-center">
              <p className="text-lg font-semibold text-purple-800">
                Total Price: ₹ {Number(formData.quantity * formData.price).toLocaleString()}
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg mt-4 transition-all ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isLoading ? "Placing Order..." : "Submit Order"}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Buy;
