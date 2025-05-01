import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const [formdata, setFormData] = React.useState({
    name: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '', // this will hold the Cloudinary URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'Books_Store'); // replace with your actual preset

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dev8asa0g/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const cloudData = await res.json();
      console.log('Cloudinary Upload:', cloudData);
      toast.success('Image uploaded to Cloudinary!');
      setFormData((prevData) => ({
        ...prevData,
        image: cloudData.secure_url,
      }));
    } catch (err) {
      console.error('Cloudinary upload failed:', err);
      toast.error('Image upload failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4001/api/upload', formdata);
      console.log(response.data);
      toast.success('Book uploaded successfully!');

      setFormData({
        name: '',
        title: '',
        price: '',
        category: '',
        description: '',
        image: '',
      });

      document.getElementById('file-input').value = '';
    } catch (error) {
      console.error('Error uploading book data:', error);
      toast.error('Error uploading book. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-base-200 shadow-xl rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-center text-blue-700">Upload Book</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter Book name"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Book Title</label>
            <input
              type="text"
              name="title"
              value={formdata.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter Book title"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Book Price</label>
            <input
              type="number"
              name="price"
              value={formdata.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Price"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formdata.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Category"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formdata.description}
              onChange={handleChange}
              required
              maxLength={300}
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2 resize-none"
              placeholder="Write a short description..."
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              id="file-input"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Upload Book
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
