import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const UpdateSpot = () => {
  const updateSpot = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id,
    spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitors,
    image,
  } = updateSpot;

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const spot_name = form.spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitors = form.totalVisitors.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const image = form.image.value;

    const spotUpdate = {
      spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitors,
      user_email,
      user_name,
      image,
    };
    console.log(spotUpdate);

    //send data

    fetch(`https://b9a10-server-side-coral.vercel.app/addTouristSpot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Spot Update Successfully",
            icon: "success",
          });
          navigate("/");
        }
      });
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <form onSubmit={handleUpdate}>
        <div className="md:grid grid-cols-2 gap-6 bg-[#F4F3F0] rounded-xl p-16 ">
          <div className="form-control">
            <label className="label">Tourist Spot Name</label>
            <input
              type="text"
              name="spot_name"
              defaultValue={spot_name}
              placeholder="Tourist Spot Name"
              className="input input-bordered "
            />
          </div>

          <div className="form-control">
            <label className="label">Country Name</label>
            <input
              type="text"
              name="country_name"
              defaultValue={country_name}
              placeholder="Enter Country Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Enter Location"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Short Description</label>
            <input
              type="text"
              name="short_description"
              defaultValue={short_description}
              placeholder="Short Description"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Average average_cost</label>
            <input
              type="text"
              name="average_cost"
              defaultValue={average_cost}
              placeholder="Enter Amount"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Seasonality</label>
            <input
              type="text"
              name="seasonality"
              defaultValue={seasonality}
              placeholder="Enter Season"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Travel travel_time</label>
            <input
              type="text"
              name="travel_time"
              defaultValue={travel_time}
              placeholder="Travel travel_time"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Total Visitor</label>
            <input
              type="text"
              name="totalVisitors"
              defaultValue={totalVisitors}
              placeholder="Total Visitor Per Year"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> User Email</label>
            <input
              type="text"
              name="user_email"
              defaultValue={user?.email}
              placeholder="Enter Amount"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> User Name</label>
            <input
              type="text"
              name="user_name"
              defaultValue={user?.displayName}
              placeholder="Enter Amount"
              className="input input-bordered w-full "
            />
          </div>

          <div className="col-span-2">
            <div className="form-control">
              <label className="label"> Image</label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Enter Image URL"
                className="input input-bordered w-full "
              />
            </div>

            <input
              className="w-full bg-[#D2B48C] mt-5 rounded-lg p-2 "
              type="submit"
              value="Update Tourist Spot"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateSpot;
