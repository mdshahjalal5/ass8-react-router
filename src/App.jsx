import { useEffect, useState } from "react";
import Doctors from "./components/Doctors";
import ServiceSummary from "./components/ServiceSummary";
import Header from "./components/Header";

const App = () => {
  const [doctors, setDoctors] = useState([]);

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

  return (
    <section className="mt-10">
      <Header />
      <Doctors doctors={doctors} />
      <ServiceSummary />
    </section>
  );
};

export default App;
