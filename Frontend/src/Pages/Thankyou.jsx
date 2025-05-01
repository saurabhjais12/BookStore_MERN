import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-6">
          🎉 Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Your order has been placed successfully.
        </p>
        <p className="text-md font-semibold text-green-800 mb-8">
          Your order will be delivered in <span className="underline">30 minutes</span>.
        </p>

        <Link to="/">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
