"use client";

import "../styles/globals.css";
import OrderLookupForm from "@/components/orderlookupform";
import OrderDetails from "@/components/orderdetails";
import CustomerDetails from "@/components/customerdetails";
import ProductDetails from "@/components/productdetails";

import { useEffect, useState } from "react";
import ProductImage from "@/components/productimage";

const OrderLookup = () => {
  const [orderData, setOrderData] = useState(null);
  const [mockData, setMockData] = useState(null);
  const [error, setError] = useState("");
  const [lookupParams, setLookupParams] = useState(null);

  useEffect(() => {
    if (lookupParams) {
      const { orderId, customerEmail } = lookupParams;
      fetch(
        `http://192.168.1.64:3375/api/v1/customerInfo/getProductByOrderNumber?email=${customerEmail}&orderNumber=${orderId}`
      )
        .then((res) => res.json())
        .then((data) => setMockData(data))
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch order information");
        });
    }
  }, [lookupParams]);

  const handleLookup = (orderId, customerEmail) => {
    setError("");
    setLookupParams({ orderId, customerEmail });

    if (!mockData) {
      setError("Order Information is not available");
      return;
    }

    if (mockData && mockData.success) {
      setOrderData(mockData.message); // Set the actual data here
    } else {
      setOrderData(null);
      setError("Order ID and customer email do not match");
    }
  };

  return (
    <div className="flex flex-col w-full px-4 py-10 sm:p-10 items-center">
      <div className="w-full mb-10">
        <OrderLookupForm onLookup={handleLookup} /> {/* Passing handleLookup */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      {orderData ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full">
          <div className="flex flex-col w-full items-center h-full">
            <ProductImage product={orderData.product} />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
              {/* Left Column */}
              <div className="flex flex-col h-full space-y-4">
                <OrderDetails
                  orderNumber={orderData.order.orderNumber}
                  timestamp={orderData.product.updatedAt}
                  companyName={
                    orderData.product.productManufacturer.companyName
                  }
                  retailerName={orderData.product.soldBy.companyName}
                />
                <CustomerDetails
                  customerName={orderData.customer.name}
                  customerEmail={orderData.customer.email}
                  phoneNumber={orderData.customer.phoneNumber}
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-start md:items-end w-full h-full space-y-4">
                <ProductDetails product={orderData.product} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        error && <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default OrderLookup;
