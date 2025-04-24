import Doctor from "./Doctor";

const Doctors = ({ doctors }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  p-4 rounded-xl my-7">
        <h2 className="text-3xl font-semibold font-courgette text-purple-800 drop-shadow-lg">
          Our Best Doctors
        </h2>
        <p className="text-gray-500 drop-shadow-lg">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 mt-10">
        {doctors.map((doctor, idx) => (
          <Doctor
            key={doctor.name}
            doctor={doctor}
            img={`/assets/doctors/doctor${idx + 1}.jpg`}
          />
        ))}
      </div>
    </>
  );
};

export default Doctors;
