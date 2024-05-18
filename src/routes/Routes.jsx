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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/addTouristSpot"),
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
        loader: () => fetch("http://localhost:5000/addTouristSpot"),
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
        loader: () => fetch("http://localhost:5000/addTouristSpot"),
      },
      {
        path: "/spotDeatils/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addTouristSpot/${params.id}`),
      },
      {
        path: "/updateSpot/:id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addTouristSpot/${params.id}`),
      },
    ],
  },
]);
