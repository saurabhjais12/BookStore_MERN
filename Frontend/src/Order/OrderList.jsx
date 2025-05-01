import React from "react";
import { Link } from "react-router-dom";

function OrderList({ order }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">{order.productName}</h2>
          <div className="flex items-center space-x-2">
            <span className="badge badge-secondary">{order.category}</span>
            <span className="text-gray-600">{order.status}</span>
          </div>
          <p className="text-gray-500">{order.title}</p>

          <div className="mt-3">
            <p className="text-sm text-gray-500"><strong>Price:</strong> ₹ {order.price}</p>
            <p className="text-sm text-gray-500"><strong>Quantity:</strong> x{order.quantity}</p>
            <p className="text-sm text-gray-500"><strong>Total Price:</strong> ₹ {order.price * order.quantity}</p>
            <p className="text-sm text-gray-500"><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
            <p className="text-sm text-gray-500"><strong>Customer Name:</strong> {order.name}</p>
            <p className="text-sm text-gray-500"><strong>State:</strong> {order.state}</p>
            <p className="text-sm text-gray-500"><strong>City:</strong> {order.city}</p>
            <p className="text-sm text-gray-500"><strong>Address:</strong> {order.address}</p>
            <p className="text-sm text-gray-500"><strong>Pincode:</strong> {order.pincode}</p>
            <p className="text-sm text-gray-500"><strong>Phone:</strong> {order.phone}</p>
          </div>

          <div className="card-actions justify-end mt-4">
            <Link
              to="/order-details"
              state={{ orderId: order.id }}
            >
              {/* <div className="cursor-pointer px-4 py-2 rounded-full border-[2px] bg-blue-600 hover:bg-blue-500 hover:text-white text-white duration-200">
                View Order Details
              </div> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
