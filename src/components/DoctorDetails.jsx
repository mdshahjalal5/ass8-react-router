import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import storage from "../utils.localStorage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DoctorDetails = () => {
  const { id } = useParams();
  console.log(id, "DoctorDetails.jsx", 9);

  const navigate = useNavigate();

  const doctors2 = useLoaderData();
  const booked = storage.get("ids");

  const [doctors, setDoctors] = useState([]);
  // console.log(doctors, "DoctorDetails.jsx", 15);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.info("Error fetching doctors:", error);
      });
  }, []);

  const handleAppointment = (id) => {
    if (booked?.find((bookedId) => bookedId == id)) {
      console.log(booked, "DoctorDetails.jsx", 30);
      toast.error("You have already booked this appointment");
      return;
    }
    toast.success(`${name} is Booked successfully`);
    storage.addToArray("ids", id);
    navigate("/my-bookings");
  };
  // console.log(doctors, "Booked.jsx", 6);

  const doctor = doctors2.find((doctor) => doctor.id == id);

  const {
    name,
    qualifications,
    registrationno,
    availability,
    workingAt,
    consultationFee,
    profileImage,
  } = doctor;

  return (
    <div className="mt-10 space-y-9">
      <div className="p-7 rounded-2xl drop-shadow-2xl border bg-gradient-to-b   from-gray-100 to-gray-300 space-y-3">
        <h2 className="text-2xl  text-gray-600 text-center">
          Doctor's Profile Details
        </h2>
        <p className="text-center sm:w-1/2 text-gray-500 mx-auto">
          At Medical Hub, we pride ourselves on delivering compassionate,
          patient-focused care through a diverse team of highly skilled medical
        </p>
      </div>
      {/* doctor details infos */}
      <div className="sm:flex items-center gap-7 md:gap-16 sm:p-10 p-2 rounded-2xl drop-shadow-2xl space-y-9 bg-gray-200">
        <div className="">
          <img
            src={profileImage}
            className="max-w-[400px] rounded-2xl drop-shadow-2xl"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-orange-400 text-2xl font-courgette">{name}</h1>
          <p className="space-x-3 text-gray-500 text-lg">
            {qualifications.map((qualification, index) => (
              <span key={index}>{qualification}</span>
            ))}
          </p>
          <p className=" text-gray-500 ">Working at:</p>
          <h2 className="text-2xl text-purple-500 font-kaushan font-black ">
            {workingAt}
          </h2>
          <div>
            <h3 className="text-xl text-gray-500 border-gray-500 border-t-[3px] border-b-[3px] border-dotted p-2 mt-5">
              Register No: {registrationno}
            </h3>
          </div>
          <div className="space-x-3">
            <span className="text-gray-700 font-semibold">Availability:</span>
            {availability.map((day, idx) => (
              <span
                className="border border-red-500 py-1 px-3 rounded-full  grad-orange"
                key={idx}
              >
                {day}
              </span>
            ))}
          </div>
          <p className="text-gray-700">
            <span className="text-lg font-semibold">Consultation Fee:</span>{" "}
            <span className="text-blue-500">Taka: {consultationFee}</span>{" "}
            {"  "} (incl. Vat)
            <span className="text-blue-500"> Per consultation</span>
          </p>
        </div>
      </div>
      <div className="p-7 rounded-2xl drop-shadow-2xl border bg-gradient-to-b   from-gray-100 to-gray-300 space-y-3">
        <h2 className="text-2xl  text-gray-600 text-center">
          Book an Appointment
        </h2>
        <div className="flex justify-between border-t-[3px] border-b-[3px] border-gray-400 py-2 px-4 border-dotted">
          <h2 className="font-semibold text-xl">Availability</h2>
          <p className="border border-green-300 px-4 py-1 rounded-full bg-green-200">
            Doctor available today
          </p>
        </div>
        <p className="text-center rounded-full  text-gray-500 mx-auto text-orangy border py-1 px-2 bg-gradient-to-r from-orange-50 to-orange-100">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>
        <div className="w-full">
          <div
            onClick={() => {
              handleAppointment(id);
            }}
            className="flex-1 border "
          >
            <Button
              label={"Book an appointment now"}
              className={
                "transform  w-full bg-sky-700 border border-blue-500 text-orange-400 text-white capitalize bg-sky-900 hover:bg-sky-800 active:bg-sky-700 focus:ring "
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
