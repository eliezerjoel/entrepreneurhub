// pages/ventures/[id].js
import VenturePage from "../../../components/VenturePage";
import getOneVenture from "../../actions/getOneVenture";

const VenturePageWrapper = async ({ params }) => {
  const { id } = params;
  const { venture, phoneNumber } = await getOneVenture(id); // Destructure the venture and phoneNumber

  return <VenturePage venture={venture} phoneNumber={phoneNumber} />; // Pass both as props
};

export default VenturePageWrapper;
