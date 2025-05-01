import React from 'react';

const ThankYouSignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-purple-400 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-green-500 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg">
          You have successfully signed up 🎉
        </p>
      </div>
    </div>
  );
};

export default ThankYouSignUp;
