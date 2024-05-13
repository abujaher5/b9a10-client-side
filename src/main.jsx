import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <RouterProvider router={router}></RouterProvider>
  // </React.StrictMode>

  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
