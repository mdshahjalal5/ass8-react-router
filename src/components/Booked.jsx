import storage from "../utils.localStorage";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Booked = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  const handeCancelAppointment = (id) => {
    const remaining = doctors.filter((doctor) => doctor.id !== id);
    setDoctors(remaining);
    // storage.remove("ids");
    storage.removeFromArray("ids", `${id}`);
  };
  console.log(doctors, "Booked.jsx", 6);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);
  const booked = storage.get("ids");

  const bookedDoctor = doctors?.filter((doctor) =>
    booked?.includes(`${doctor.id}`),
  );

  return (
    <>
      {!bookedDoctor.length == 0 && (
        <div className="flex flex-col justify-center items-center mt-10">
          <h2 className="text-3xl font-semibold font-courgette text-purple-800 drop-shadow-lg">
            My Today Appointments
          </h2>
          <p className="text-gray-500 drop-shadow-lg">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
      )}
      {bookedDoctor.length === 0 && (
        <div className="flex flex-col justify-center items-center drop-shadow-lg border py-4 px-7 rounded-xl bg-gray-50 mt-10 min-h-[60vh] space-y-9">
          <h2 className="text-3xl font-semibold font-courgette text-purple-800 drop-shadow-lg">
            <span className="font-sans">Y</span>ou have not booked any
            appointment.
          </h2>
          <p className="text-gray-500 drop-shadow-lg">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
          <div onClick={() => navigate("/")}>
            <Button label={"Book Now"} className={"text-white"} />
          </div>
        </div>
      )}

      {bookedDoctor.map((appointment, idx) => {
        return (
          <>
            <div
              key={idx}
              className="p-7 rounded-2xl drop-shadow-2xl border bg-gradient-to-b from-gray-100 to-gray-300 space-y-3 mt-9"
            >
              <div className="flex justify-between border-t-[3px] border-b-[3px] border-gray-400 py-2 px-4 border-dotted">
                <div>
                  <h2 className="font-semibold text-xl">{appointment?.name}</h2>
                  <p className="space-x-3 text-gray-500 text-lg">
                    {appointment?.qualifications.map((qualification, index) => (
                      <span key={index}>{qualification}</span>
                    ))}
                  </p>
                </div>
                <p className="border border-green-300 px-4 py-1 rounded-full bg-green-200 h-fit">
                  Appointment Fee: {appointment?.consultationFee} Taka
                </p>
              </div>
              <div className="w-full">
                <div
                  onClick={() => {
                    handeCancelAppointment(appointment.id);
                  }}
                  className="flex-1 border "
                >
                  <Button
                    label={"Cancel appointment"}
                    className="transform w-full bg-transparent border border-blue-500 text-orange-400 text-black capitalize bg-sky-900 hover:bg-sky-800 active:bg-sky-700 focus:ring"
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Booked;
