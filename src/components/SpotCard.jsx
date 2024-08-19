import { Link } from "react-router-dom";

const SpotCard = ({ touristSpot }) => {
  const {
    _id,
    spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    image,
  } = touristSpot;

  return (
    <section className="">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {spot_name}
            </h3>
            <p>{location}</p>
            <p>{country_name}</p>
            <p>{short_description}</p>
            <p>{location}</p>
            <p>{average_cost}</p>

            <div className="flex">
              <Link to={`/spotDetails/${_id}`}>
                <button className=" btn bg-orange-500">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotCard;
