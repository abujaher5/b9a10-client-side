import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {
  const spotDeatils = useLoaderData();
  const { id } = useParams();
  // console.log(id);

  console.log(spotDeatils);
  const [singleSpot, setSingleSpot] = useState();
  useEffect(() => {
    const spotInfo = spotDeatils.find((details) => details._id == id);
    setSingleSpot(spotInfo);
  }, []);

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
  } = spotDeatils;
  // console.log(_id);
  console.log(spot_name);
  return (
    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
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
            Tourist Spot Name : {spot_name}
          </h3>

          <p>Location : {location}</p>

          <p>Average Cost : {average_cost}</p>
          <p>Season : {seasonality} </p>
          <p>Travel Time : {travel_Time}</p>
          <p>Total visitors : {totalVisitors}</p>
          <p>Short description : {short_description}</p>
        </div>
      </a>
    </div>
  );
};

export default SpotDetails;
