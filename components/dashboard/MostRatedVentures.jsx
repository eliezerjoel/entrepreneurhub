import React from "react";

const MostRatedVentures = () => {
    const ventures = [
      {
        id: "1",
        ventureName: "Green Earth",
        organization: "Eco Warriors",
        stars: 4.8,
      },
      {
        id: "2",
        ventureName: "Smart Recycling",
        organization: "Green Future",
        stars: 4.5,
      },
      {
        id: "3",
        ventureName: "Solar Innovations",
        organization: "Solar Solutions Inc.",
        stars: 4.7,
      },
    ];

    // In your main component
    // <MostRatedVentures ventures={sampleVentures} />;

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Most Rated Ventures</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Venture Name</th>
              <th className="py-3 px-6 text-left">Organization</th>
              <th className="py-3 px-6 text-center">Stars</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {ventures.map((venture) => (
              <tr
                key={venture.id}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <td className="py-3 px-6 text-left">{venture.ventureName}</td>
                <td className="py-3 px-6 text-left">{venture.organization}</td>
                <td className="py-3 px-6 text-center">{venture.stars} ★</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostRatedVentures;
