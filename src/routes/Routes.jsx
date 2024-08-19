import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import MyList from "../pages/MyList";
import Home from "../pages/Home";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import PrivateRoute from "../privateRoute/PrivateRoute";
import SpotDetails from "../components/SpotDetails";
import UpdateSpot from "../components/UpdateSpot";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://b9a10-server-side-coral.vercel.app/addTouristSpot"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () =>
          fetch("https://b9a10-server-side-coral.vercel.app/addTouristSpot"),
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },

      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://b9a10-server-side-coral.vercel.app/addTouristSpot"),
      },

      {
        path: "/spotDetails/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9a10-server-side-coral.vercel.app/addTouristSpot/${params.id}`
          ),
      },
      {
        path: "/updateSpot/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9a10-server-side-coral.vercel.app/addTouristSpot/${params.id}`
          ),
      },
    ],
  },
]);
