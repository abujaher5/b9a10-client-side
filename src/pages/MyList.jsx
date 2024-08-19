import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyList = () => {
  // const myListedItems = useLoaderData();

  // const [listedItems, setListedItems] = useState(myListedItems);
  const { user } = useContext(AuthContext);
  const [listed, setListed] = useState([]);

  const exDetails = listed.filter((lis) => lis.user_email === user?.email);
  const url = `http://localhost:5000/addTouristSpot?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setListed(data));
  }, [url]);

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/addTouristSpot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted Successfully");

              const remainingListItems = exDetails.filter(
                (listedItem) => listedItem._id !== _id
              );
              setListed(remainingListItems);
            }
          });
      }
    });
  };
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
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {exDetails.map((listItem) => (
            <tr key={listItem._id} className="bg-base-200">
              <th></th>
              <td>{listItem.spot_name}</td>
              <td>{listItem.average_cost}</td>
              <td>{listItem.totalVisitors}</td>
              <td className="space-x-4">
                <button
                  onClick={() => handleDelete(listItem._id)}
                  className=" btn "
                >
                  <AiFillDelete className="text-xl"></AiFillDelete>
                </button>
                <Link to={`/updateSpot/${listItem._id}`}>
                  <button className="btn">
                    <CiEdit className="text-xl"></CiEdit>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
