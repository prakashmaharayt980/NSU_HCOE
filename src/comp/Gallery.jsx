import React, { useState } from "react";
import Cricket_img from "../assets/img/Cricket.jpg";
import Health2 from "../assets/img/Health2.jpg";
import Health3 from "../assets/img/Health3.jpg";
import Quiz1 from "../assets/img/Quiz1.jpg";
import Quiz2 from "../assets/img/Quiz2.jpg";
import volleyball from "../assets/img/vollball1.jpg";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/image4.jpg";
import image5 from "../assets/img/image5.jpg";
import image6 from "../assets/img/image6.jpg";
import image7 from "../assets/img/image7.jpg";
import image8 from "../assets/img/image8.jpg";
import image9 from "../assets/img/image9.jpg";
import image10 from "../assets/img/image10.jpg";
import image11 from "../assets/img/image11.jpg";
import image12 from "../assets/img/image12.jpg";
import image13 from "../assets/img/image13.jpg";
import image14 from "../assets/img/image14.jpg";
import image15 from "../assets/img/image15.jpg";
import image16 from "../assets/img/image16.jpg";
import image17 from "../assets/img/image17.jpg";
import image18 from "../assets/img/image18.jpg";
import image19 from "../assets/img/image19.jpg";
import image20 from "../assets/img/image20.jpg";
import image21 from "../assets/img/image21.jpg";
import image22 from "../assets/img/image22.jpg";
import image23 from "../assets/img/image23.jpg";

const Gallery = () => {
  // Array of image URLs
  const images = [
    {image:Cricket_img},
    {image:Health2},
    {image:Health3},
    {image:Quiz1},
    {image:Quiz2},
    {image:volleyball},
    {image:image1},
    {image:image2},
    {image:image3},
    {image:image4},
    {image:image5},
    {image:image6},
    {image:image7},
    {image:image8},
    {image:image9},
    {image:image10},
    {image:image11},
  
    {image:image12},
    {image:image13},
    {image:image14},
    {image:image15},
    {image:image16},
    {image:image17},
    {image:image18},
    {image:image19},
    {image:image20},
    {image:image21},
    {image:image22},
    {image:image23},

  ];

  // State to track the clicked image
  const [selectedImage, setSelectedImage] = useState(null);

  return (
<>
<div className="gallery-section py-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-6">
        Glimpse of Events
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt={`Event ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg cursor-pointer shadow-md transition-transform transform hover:scale-105"
            onClick={() => setSelectedImage(image.image)} // Set the clicked image
          />
        ))}
      </div>

      {/* Modal for Large Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full p-2 focus:outline-none"
              onClick={() => setSelectedImage(null)} // Close modal
            >
              ✕
            </button>
            {/* Large Image */}
            <img
              src={selectedImage}
              alt="Selected Event"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
       <h2 className="text-center mt-1  ">Adding soon</h2>
      
    </div>
     <div className="jay-nepal flex  mt-2 justify-center text-center bg-green-800 text-white py-1">
     <h2 className="text-2xl font-semibold ">Jay Nepal</h2>
   
   </div>
</>
  );
};

export default Gallery;
