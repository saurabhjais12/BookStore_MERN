import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCard from "../Order/OrderList"; // Corrected the import path

const Order = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-mern-jrsz.onrender.com/api/OrderDetails");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
