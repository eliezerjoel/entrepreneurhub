'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import getAllVentures from "../../app/actions/getAllVentures";

const VenturesPage = () => {
  const [ventures, setVentures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch ventures when the component mounts
    async function fetchVentures() {
      setLoading(true);
      const data = await getAllVentures();
      setVentures(data);
      setLoading(false);
    }

    fetchVentures();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Ventures</h1>
        <Link href="/ventures/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add New Venture
          </button>
        </Link>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search ventures..."
          className="border px-4 py-2 rounded w-full"
        />
        <select className="border px-4 py-2 rounded">
          <option value="">Filter by Category</option>
          <option value="tech">Technology</option>
          <option value="art">Art & Design</option>
          <option value="social">Social Impact</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ventures.map((venture) => (
          <div
            key={venture.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            
            <img
              src={imageSrc}
              alt={venture.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{venture.name}</h2>
              <p className="text-gray-600">{venture.description}</p>
              <Link href={`/ventures/${venture.id}`}>
                <button className="mt-4 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenturesPage;
