import Doctor from "./Doctor";

const Doctors = ({ doctors }) => {
  return (
    <section className="flex flex-wrap justify-center gap-9  border border-green-500">
      {doctors.map((doctor, idx) => (
        <Doctor
          key={doctor.name}
          doctor={doctor}
          img={`
       /assets/doctors/doctor${idx + 1}.jpg
`}
        />
      ))}
    </section>
  );
};

export default Doctors;
