import { useLoaderData } from "react-router-dom";

import AllSpot from "../components/AllSpot";
import { useState } from "react";

const AllTouristsSpot = () => {
  const allSpot = useLoaderData();
  const [ascending, setAscending] = useState(true);

  return (
    <section>
      <div className="text-center">
        <button
          onClick={() => setAscending(!ascending)}
          className="btn btn-outline btn-primary"
        >
          Average Cost : {ascending ? "High to Low" : "Low to High"}
        </button>
      </div>
      <div>
        {allSpot.map((spot) => (
          <AllSpot key={spot._id} spot={spot}></AllSpot>
        ))}
      </div>
    </section>
  );
};

export default AllTouristsSpot;
