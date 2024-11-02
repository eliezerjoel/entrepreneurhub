import React from "react";

const UsersStats = () => {

  const cardsData = [
    {
      title: "New Signups Today",
      value: 10,
      icon: "🆕",
    },
    {
      title: "Active Users",
      value: 120,
      icon: "🔍",
    },
  ];

  return (
    <div className="p-6  bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">UsersStats</h1>
      
    {/* <!-- CARD COMPONENT --> */}
    {/* <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div class="flex-shrink-0">
        <img src="https://i.ibb.co/vX8pYzZ/logo-only.png" alt="" class="h-12 w-12" />
      </div>
      <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900">Traversy Media</h4>
        <p class="text-base text-gray-600">You have a new message!</p>
      </div>
    </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div className="text-3xl mr-4">
              {card.icon}
            </div>
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

export default UsersStats;
