"use client";
import React, { useEffect, useState } from "react";
import VentureCard from "../../components/VentureCard";
import getAllVentures from "../actions/getAllVentures"

const VenturesList = () => {
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

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ventures.map((venture) => (
          <VentureCard key={venture.id} venture={venture} />
        ))}
      </div>
    </div>
  );
};

export default VenturesList;
