import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SpotCard = ({ touristSpot }) => {
  const {
    _id,
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
  } = touristSpot;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });

        fetch(`http://localhost:5000/addTouristSpot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted Successfully");
            }
          });
      }
    });
  };

  return (
    <section className="">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
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
              <Link to={`/spotDeatils/${_id}`}>
                <button className=" btn bg-orange-500">View Details</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className=" btn bg-red-600"
              >
                Delete
              </button>
              <Link to={`update`}>
                <button className=" btn">Update</button>
              </Link>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default SpotCard;
