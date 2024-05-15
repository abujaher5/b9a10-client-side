import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import MyList from "../pages/MyList";
import Home from "../pages/Home";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
      },
    ],
  },
]);
