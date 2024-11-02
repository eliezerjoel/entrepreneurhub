import React from 'react'
import UsersStats from "../../components/dashboard/UsersStats";
import OrganisationStats from "../../components/dashboard/OrganisationStats";
import VenturesStats from "../../components/dashboard/VenturesStats";
import MostRatedVentures from "../../components/dashboard/MostRatedVentures";
const Dashboard = () => {
  return (
    <div>
      <UsersStats />
      <OrganisationStats />
      <VenturesStats />
      <MostRatedVentures />
    </div>
  );
}

export default Dashboard