import { useLoaderData } from "react-router-dom";

const MyList = () => {
  const myListedItem = useLoaderData();
  console.log(myListedItem);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Spot Name</th>
            <th>Cost</th>
            <th>Total Visitors</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myListedItem.map((listItem) => (
            <tr key={listItem._id} className="bg-base-200">
              <th></th>
              <td>{listItem.spot_name}</td>
              <td>{listItem.average_cost}</td>
              <td>{listItem.totalVisitors}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
