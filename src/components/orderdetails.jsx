const OrderDetails = ({
  orderNumber,
  timestamp,
  companyName,
  retailerName,
}) => {
  return (
    <>
      <div className="w-full h-full flex p-5 mr-10 rounded-md flex-col items-baseline bg-blue-50 mb-10">
        <h2 className="text-[24px] font-bold">Order Information</h2>
        <p>
          <strong>Order Id:</strong> {orderNumber}
        </p>
        <p>
          <strong>Timestamp:</strong> {timestamp}
        </p>
        <p>
          <strong>Company Name:</strong> {companyName}
        </p>
        <p>
          <strong>Retailer Name:</strong> {retailerName}
        </p>
      </div>
    </>
  );
};

export default OrderDetails;
