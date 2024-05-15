const AddTouristsSpot = () => {
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const SpotName = form.spotName.value;
    const CountryName = form.countryName.value;
    const Location = form.location.value;
    const ShortDescription = form.description.value;
    const AverageCost = form.cost.value;
    const Season = form.seasonality.value;
    const TravelTime = form.time.value;
    const TotalVisitor = form.totalVisitor.value;
    const UserEmail = form.email.value;
    const UserName = form.userName.value;
    const Image = form.image.value;
    const FromDetails = {
      SpotName,
      CountryName,
      Location,
      ShortDescription,
      AverageCost,
      Season,
      TravelTime,
      TotalVisitor,
      UserEmail,
      UserName,
      Image,
    };
    console.log(FromDetails);
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
