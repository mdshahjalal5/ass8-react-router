import Button from "./Button";

import { doctor1 } from "../assets/doctorProfile/index.js";
import { useNavigate } from "react-router-dom";

const Doctor = ({ doctor }) => {
  const navigate = useNavigate();
  const {
    name,
    qualifications,
    registrationno,
    experience,
    availability,
    consultationFee,
    workingAt,
    profileImage,
  } = doctor;
  return (
    <div className="flex-center  flex-col">
      <div className="flex flex-col  w-full px-3 sm:px-7   py-3 rounded-2xl drop-shadow-2xl space-y-2 bg-gray-200">
        <img
          src={profileImage}
          className="rounded-2xl drop-shadow-2xl max-sm:max-w-[300px]"
        />
        <div className="flex justify-start gap-5 items-center">
          <span className="rounded-full px-2 py-1 border text-green-500   grad-orange">
            {availability[0]}
          </span>
          <span className="rounded-full px-2 py-1 border text-green-500  grad-orange">
            {experience}+ experience
          </span>
        </div>
        <h1 className="text-purple-500 text-2xl">{name}</h1>
        <p className="space-x-3 text-gray-500 text-lg">
          {qualifications.map((qualification, index) => (
            <span key={index}>{qualification}</span>
          ))}
        </p>
        <div>
          <h3 className="text-xl text-gray-500 border-gray-500 border-t-[2px]  border-dotted p-2 mt-5">
            Register No: {registrationno}
          </h3>
        </div>

        <div className="flex gap-6  w-full">
          <div
            onClick={() => navigate(`/doctor/${doctor.id}`)}
            className="flex-1 border "
          >
            <Button
              label={"View Details"}
              className={
                "transform  w-full bg-transparent border border-blue-500 font-sans"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
