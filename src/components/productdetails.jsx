const ProductDetails = ({ product }) => {
  return (
    <div className="h-full flex">
      {/* Product Details Section */}
      <div className="p-10 rounded-md bg-blue-50 w-full h-full">
        {/* Product Header */}
        <div className="mb-5 w-full">
          <p className="text-sm text-gray-500">
            BatchId: {product.batchId.batchId}
          </p>
          <p className="text-3xl text-blue-800 font-bold">
            {product.productName}
          </p>
          <p className="text-sm text-gray-500">SKU: {product.productSku}</p>
        </div>

        {/* Price */}
        <div className="mb-5">
          <p className="text-2xl font-[500]">${product.productPrice}</p>
        </div>

        {/* Manufacturer & Status */}
        <div className="mb-5">
          <p>
            <strong>Manufacturer: </strong>
            {product.productManufacturer.companyName}
          </p>
          <p>
            <strong>Status: </strong>
            {product.productStatus}
          </p>
        </div>

        {/* Product Type & Web Link */}
        <div className="mb-5">
          <p>
            <strong>Product Type: </strong>
            {product.productType[0]?.name}
          </p>
          <p>
            <strong>Weblink: </strong>
            <a
              href={product.productWebLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {product.productWebLink}
            </a>
          </p>
        </div>

        {/* Description */}
        <div className="mb-5">
          <p className="font-bold">Description</p>
          <p>{product.productDescription}</p>
        </div>

        {/* Product Attributes */}
        <div>
          <p className="font-[900]">Product Attributes</p>
          {product.productAttributes.map((attribute, index) => (
            <p key={index}>
              <strong>{attribute.attributeName}:</strong>{" "}
              {attribute.attributeValue}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
