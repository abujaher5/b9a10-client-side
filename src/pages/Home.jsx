import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SpotCard from "../components/SpotCard";

const Home = () => {
  const touristSpots = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      {/* <div>
        <h3>Length:{touristSpots.length}</h3>
        <SpotCard></SpotCard>
      </div> */}
      <div className="grid grid-cols-2 gap-3">
        {touristSpots.map((touristSpot) => (
          <SpotCard key={touristSpot._id} touristSpot={touristSpot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
