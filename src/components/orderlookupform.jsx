"use client";

import { useState } from "react";

const OrderLookupForm = ({ onLookup }) => {
  const [orderId, setOrderId] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLookup(orderId, customerEmail); // Passing the values to the parent
  };

  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="text-3xl font-bold mb-5">Order Verification</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center"
      >
        <div className="flex w-full mb-8">
          <div className="flex flex-col mr-10 w-1/2">
            <label htmlFor="orderid">Order ID</label>
            <input
              className="border border-solid border-gray-400 h-10 rounded-md p-2"
              type="text"
              name="orderid"
              id="orderid"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="customeremail">Customer Email</label>
            <input
              className="border border-solid border-gray-400 h-10 rounded-md p-2"
              type="email"
              name="customeremail"
              id="customeremail"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full h-10 text-white hover:bg-blue-900 rounded-md bg-blue-700"
          >
            LookUp Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderLookupForm;
