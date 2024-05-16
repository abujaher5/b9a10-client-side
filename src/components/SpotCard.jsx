const SpotCard = ({ touristSpot }) => {
  const {
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
  } = touristSpot;
  return (
    <section className="">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Noster tincidunt reprimique ad pro
            </h3>

            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>

            <button className="btn-outline btn bg-orange-500">
              View Details
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default SpotCard;
