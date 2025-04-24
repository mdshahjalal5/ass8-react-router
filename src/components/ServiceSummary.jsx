import CountUp from "react-countup";
import { logo } from "../assets";
import { servicesSummary } from "../constant";

const ServiceSummary = () => {
  return (
    <div className="grid justify-items-center md:grid-cols-4 grid-cols-2 gap-5 mt-20 borde order-red-400 ">
      {servicesSummary.map((item) => (
        <CountUp start={0} end={item.count} delay={0}>
          {({ countUpRef }) => (
            <div
              key={item.label}
              className="p-5 flex-center  flex-col border rounded-xl w-full gap-1 drop-shadow-md "
            >
              <img src={logo} alt="icon" />
              <h1 ref={countUpRef} className="text-2xl text-skyy font-black">
                {item.count + "+"}
              </h1>
              <p className="text-gray-500">{item.label}</p>
            </div>
          )}
        </CountUp>
      ))}
    </div>
  );
};

export default ServiceSummary;
