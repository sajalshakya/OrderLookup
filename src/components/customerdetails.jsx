const CustomerDetails = ({ customerName, customerEmail, phoneNumber }) => {
  return (
    <>
      <div className="flex h-full p-5 rounded-md flex-col items-baseline bg-blue-50">
        <h2 className="text-[24px] font-bold">Customer Information</h2>
        <p>
          <strong>Customer Name:</strong> {customerName}
        </p>
        <p>
          <strong>Customer Email:</strong> {customerEmail}
        </p>
        <p>
          <strong>Phone Number:</strong> {phoneNumber}
        </p>
      </div>
    </>
  );
};

export default CustomerDetails;
