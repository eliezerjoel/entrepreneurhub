import React from "react";

const Dashboard = () => {
  const cardsData = [
    {
      title: "Total Projects",
      value: 150,
      icon: "📁", // You can replace this with an actual icon
    },
    {
      title: "Active Users",
      value: 120,
      icon: "👤",
    },
    {
      title: "New Signups Today",
      value: 10,
      icon: "🆕",
    },
    {
      title: "Pending Approvals",
      value: 5,
      icon: "🔍",
    },
  ];

  return (
    <div className="p-6 bg-gray-300">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center"
          >
            <div className="text-3xl mr-4">{card.icon}</div>
            <div>
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
