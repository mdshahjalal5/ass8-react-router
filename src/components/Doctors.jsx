import { useEffect, useState } from "react";
import Doctor from "./Doctor";
import { Section } from "lucide-react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  console.log(doctors, "Doctors.jsx", 5);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json()) // return the parsed JSON
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);
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
