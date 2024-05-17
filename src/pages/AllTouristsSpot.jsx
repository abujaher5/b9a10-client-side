import { useLoaderData } from "react-router-dom";

import AllSpot from "../components/AllSpot";

const AllTouristsSpot = () => {
  const allSpot = useLoaderData();
  const {
    spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_Time,
    totalVisitors,
    user_email,
    user_name,
    image,
  } = allSpot;
  return (
    <section className="">
      {/* <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src="https://i.ibb.co/mJ0GRD4/istockphoto-1799323584-1024x1024.jpg"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Tourist Spot Name
            </h3>

            <p>Location of Tourist Spot</p>

            <p>Average Cost</p>
            <p>Season : </p>
            <p>Travel Time</p>
            <p>Total visitors</p>
            <p>Short description</p>

            <button className="btn-outline btn bg-orange-500">
              View Details
            </button>
          </div>
        </a>
      </div> */}

      <div>
        {allSpot.map((spot) => (
          <AllSpot key={spot._id} spot={spot}></AllSpot>
        ))}
      </div>
    </section>
  );
};

export default AllTouristsSpot;
