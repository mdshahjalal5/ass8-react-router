import {
  successDoctor,
  successPatients,
  successReview,
  successStaffs,
} from "./assets";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "My Bookings",
    path: "/my-bookings",
  },
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "Contact us",
    path: "/contact-us",
  },
];

const servicesSummary = [
  {
    label: "Total Doctors",
    count: 199,
    logo: successDoctor,
  },

  {
    label: "Patients",
    count: 199,
    logo: successPatients,
  },
  {
    label: "Reviews",
    count: 199,
    logo: successReview,
  },
  {
    label: "Staffs",
    count: 199,
    logo: successStaffs,
  },
];

export { links, servicesSummary };
