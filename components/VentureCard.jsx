import React from "react";
import Link from "next/link";

const VentureCard = ({ venture }) => {
  const bucketId = "venturesStorage";
  const projectId = "66fd757200140d617b64";
  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${venture.image}/view?project=${projectId}`;
  const imageSrc = venture.image ? imageUrl : "/images/no-image.jpg";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageSrc}
        alt={venture.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{venture.name}</h2>
        <p className="text-gray-600">{venture.description}</p>
        <Link href={`ventures/${venture.$id}`}>
          <button className="mt-4 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VentureCard;