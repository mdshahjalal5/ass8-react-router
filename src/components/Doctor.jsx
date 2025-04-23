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
    <div className="flex-center in-h-[90vh] flex-col  ">
      <div className="flex-center  flex-col   sm:p-10 rounded-2xl drop-shadow-2xl space-y-9 bg-gray-200">
        <h1 className="text-red-500 text-2xl">{name}</h1>

        <img
          src={doctor1}
          className="max-w-[400px] rounded-2xl drop-shadow-2xl"
        />
        <div className="flex gap-6  w-full">
          <div
            onClick={() => navigate(`/doctor/${doctor.id}`)}
            className="flex-1 border "
          >
            <Button
              label={"View Details"}
              className={
                "transform  w-full bg-transparent border border-blue-500 text-orange-400"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
