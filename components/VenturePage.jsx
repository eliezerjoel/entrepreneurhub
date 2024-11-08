// components/VenturePage.js
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const VenturePage = ({ venture, phoneNumber, organisationName }) => {
  if (!venture) {
    return <div>Venture not found</div>;
  }

  const bucketId = "venturesStorage";
  const projectId = "66fd757200140d617b64";
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${venture.image}/view?project=${projectId}`;
  const imageSrc = venture.image ? imageUrl : "/images/no-image.jpg";

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="w-full sm:w-1/3">
            <img
              src={imageSrc}
              alt={venture.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="mt-6 sm:mt-0 sm:flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{venture.name}</h2>
            {/* <h4 className="font- text-1xl">BY: {organisationName}</h4> */}
            <h4 className="font- text-1xl">Contact: {phoneNumber}</h4>
            <p className="text-gray-600 mt-2">{venture.description}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Write-Up</h3>
          <p className="text-gray-700 mt-2">{venture.writeUp}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">
            Rate this Venture
          </h3>
          <div className="mt-2 flex space-x-2">
            <button className="px-4 py-2 bg-yellow-400 rounded-md">⭐</button>
            <button className="px-4 py-2 bg-yellow-400 rounded-md">⭐</button>
            <button className="px-4 py-2 bg-yellow-400 rounded-md">⭐</button>
            <button className="px-4 py-2 bg-gray-400 rounded-md">⭐</button>
            <button className="px-4 py-2 bg-gray-400 rounded-md">⭐</button>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-6">Comments</h3>
          <textarea
            className="w-full mt-2 p-3 border rounded-md"
            placeholder="Leave a comment"
          />
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenturePage;
