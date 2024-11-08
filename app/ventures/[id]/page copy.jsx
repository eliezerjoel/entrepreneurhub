// pages/ventures/[id].js
import VenturePage from "../../../components/VenturePage";
import getOneVenture from "../../actions/getOneVenture";

const VenturePageWrapper = async ({ params }) => {
  const { id } = params;
  const venture = await getOneVenture(id);

  

  return <VenturePage venture={venture} />;
};

export default VenturePageWrapper;
