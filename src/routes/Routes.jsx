import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import MyList from "../pages/MyList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
    ],
  },
]);
