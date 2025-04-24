import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Errorpage from "../components/Errorpage";
import Doctors from "../components/Doctors";
import DoctorDetails from "../components/DoctorDetails";
import Booked from "../components/Booked";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/my-bookings",
        element: <Booked />,
      },
      {
        path: "/doctor/:id",
        loader: () => fetch("data.json"),
        element: <DoctorDetails />,
      },
    ],
  },
]);
