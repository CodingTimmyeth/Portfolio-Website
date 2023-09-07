import React from "react";
import Divider from "../Divider";

const WorkExperience = () => {
  const jobs = [
    {
      companyName: "Doe's",
      companyPosition: "Full Stack Developer",
      dateWorked: "09-07-23",
      shortDescription: "Help John Doe built out his website",
    },
  ];
  return (
    <section className="text-start" id="Experience">
      <h1 className="text-2xl font-bold mb-10">WorkExperience:</h1>
      {jobs.map((job) => (
        <div className="flex gap-5" id={job.companyName}>
          {/* Right Side */}
          <div className="flex flex-col items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-AccentBlue"></div>
            <div className="h-full w-[1px] bg-white"></div>
          </div>

          {/* Left Side */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg">{job.companyName} </h1>
              <p className="text-sm">{job.companyPosition}</p>
            </div>
            <h3>{job.dateWorked}</h3>
            <p className="font-thin text-sm">{job.shortDescription}</p>
          </div>
        </div>
      ))}

      <Divider />
    </section>
  );
};

export default WorkExperience;
