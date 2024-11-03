import React from "react";
import { countOrganisations } from "../../app/actions/countOrganisations";

const OrganisationStats = () => {
  const organisations = countOrganisations();
  const cardsData = [
    {
      title: "Active organisations",
      value: organisations,
      icon: "👤",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">OrganisationStats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div className="text-3xl mr-4">{card.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                {card.title}
              </h2>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganisationStats;
