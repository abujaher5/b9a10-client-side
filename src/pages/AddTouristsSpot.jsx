import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const spot_name = form.spotName.value;
    const country_name = form.countryName.value;
    const location = form.location.value;
    const short_description = form.description.value;
    const average_cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const travel_Time = form.time.value;
    const totalVisitors = form.totalVisitor.value;
    const user_email = form.email.value;
    const user_name = form.userName.value;
    const image = form.image.value;
    // const email = user.email;
    const FromDetails = {
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
    };
    console.log(FromDetails);

    fetch("https://b9a10-server-side-coral.vercel.app/addTouristSpot", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(FromDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Tourist Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Go Back",
          });
        }
      });
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <form onSubmit={handleAddSpot}>
        <div className="md:grid grid-cols-2 gap-6 bg-[#F4F3F0] rounded-xl p-16 ">
          <div className="form-control">
            <label className="label">Tourist Spot Name</label>
            <input
              type="text"
              name="spotName"
              placeholder="Tourist Spot Name"
              className="input input-bordered "
            />
          </div>

          <div className="form-control">
            <label className="label">Country Name</label>
            <input
              type="text"
              name="countryName"
              placeholder="Enter Country Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Short Description</label>
            <input
              type="text"
              name="description"
              placeholder="Short Description"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Average Cost</label>
            <input
              type="text"
              name="cost"
              placeholder="Enter Amount"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Seasonality</label>
            <input
              type="text"
              name="seasonality"
              placeholder="Enter Season"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Travel Time</label>
            <input
              type="text"
              name="time"
              placeholder="Travel Time"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Total Visitor</label>
            <input
              type="text"
              name="totalVisitor"
              placeholder="Total Visitor Per Year"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> User Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Amount"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> User Name</label>
            <input
              type="text"
              name="userName"
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
                placeholder="Enter Image URL"
                className="input input-bordered w-full "
              />
            </div>

            <input
              className="w-full bg-[#D2B48C] mt-5 rounded-lg p-2 "
              type="submit"
              value="Add Tourist Spot"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
