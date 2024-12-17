import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductImage = ({ product }) => {
  const defaultImage =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

  const API_BASE_URL = "http://192.168.1.64:3375/api/v1/";
  const productImages = product?.productImages || [];

  // Map images with API path or fallback
  const formattedImages =
    productImages.length > 0
      ? productImages.map((img) => `${API_BASE_URL}${img.replace(/\\/g, "/")}`)
      : [defaultImage];

  return (
    <div className="flex w-full h-full justify-center items-center bg-blue-50 rounded-lg p-5">
      {/* React Responsive Carousel */}
      <div>
        <Carousel
          showArrows={formattedImages.length > 1}
          infiniteLoop={formattedImages.length > 1}
          autoPlay={false} // Set autoPlay to true if you want automatic transitions
          showThumbs={false} // Disable thumbnail navigation
          showStatus={false} // Disable status indicators
        >
          {formattedImages.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Product Image ${index + 1}`}
                className="w-[10px]"
                onError={(e) => (e.target.src = defaultImage)}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductImage;
