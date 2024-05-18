// import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { id } = useParams();
  //   const updateSpot = useLoaderData();
  //   const {
  //     _id,
  //     spot_name,
  //     country_name,
  //     location,
  //     short_description,
  //     average_cost,
  //     seasonality,
  //     travel_Time,
  //     totalVisitors,
  //     user_email,
  //     user_name,
  //     image,
  //   } = updateSpot;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const totalVisitor = form.totalVisitor.value;
    const email = form.email.value;
    const name = form.userName.value;
    const image = form.image.value;
    // const email = user.email;
    const spotUpdate = {
      spotName,
      countryName,
      location,
      description,
      cost,
      seasonality,
      time,
      totalVisitor,
      email,
      name,
      image,
    };
    console.log(spotUpdate);

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

        fetch(`http://localhost:5000/addTouristSpot/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(spotUpdate),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Updated Successfully");
            }
          });
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
              name="spotName"
              //   defaultValue={spotName}
              placeholder="Tourist Spot Name"
              className="input input-bordered "
            />
          </div>

          <div className="form-control">
            <label className="label">Country Name</label>
            <input
              type="text"
              name="countryName"
              //   defaultValue={countryName}
              placeholder="Enter Country Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              //   defaultValue={location}
              placeholder="Enter Location"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Short Description</label>
            <input
              type="text"
              name="description"
              //   defaultValue={description}
              placeholder="Short Description"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Average Cost</label>
            <input
              type="text"
              name="cost"
              //   defaultValue={cost}
              placeholder="Enter Amount"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Seasonality</label>
            <input
              type="text"
              name="seasonality"
              //   defaultValue={seasonality}
              placeholder="Enter Season"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Travel Time</label>
            <input
              type="text"
              name="time"
              //   defaultValue={time}
              placeholder="Travel Time"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Total Visitor</label>
            <input
              type="text"
              name="totalVisitor"
              //   defaultValue={totalVisitor}
              placeholder="Total Visitor Per Year"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> User Email</label>
            <input
              type="text"
              name="email"
              //   defaultValue={email}
              placeholder="Enter Amount"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> User Name</label>
            <input
              type="text"
              name="userName"
              //   defaultValue={userName}
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
                // defaultValue={image}
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
