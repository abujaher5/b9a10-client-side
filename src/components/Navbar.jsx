import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const { photoURL, email, displayName } = user || {};

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTouristSpot">All Tourists Spot</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/addTouristSpot">Add Tourists Spot</NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink to="/myList">My List</NavLink>
        </li>
      )}
      {/* <li>
        <NavLink to="/login">Login</NavLink>
      </li> */}
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="p-3 font-bold text-xl">Go For Visit</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          <div className="avatar flex gap-2 items-center">
            <div className="w-12  rounded-full">
              <img alt="Profile" src={photoURL} />
            </div>

            {user ? (
              <button
                onClick={handleSignOut}
                className="btn btn-ghost text-green-500S"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-ghost text-green-500">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
