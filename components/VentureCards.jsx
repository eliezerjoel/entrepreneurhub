import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const VentureCard = ({venture}) => {
  const bucketId = "venturesStorage";
  const projectId = "66fd757200140d617b64";

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${venture.image}/view?project=${projectId}`;

  const imageSrc = venture.image ? imageUrl : '/images/no-image.jpg';
  return (
    <div>
      <div className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <Image
            src={imageSrc}
            width={200}
            height={200}
            alt="Grand Conference Hall"
            className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
          />
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">{venture.name}</h4>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">
                {" "}
                {venture.description}
              </span>{" "}
              555 California St, San Francisco, CA 94104
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">
                {venture.writeUp}
              </span>
              9{venture.rating}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Price:</span>
              $150/hour
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
          <Link
            href={`/ventures/${venture.$id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
          >
            View Room
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VentureCard