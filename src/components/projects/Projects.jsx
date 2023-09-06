import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import Divider from "../Divider";

const Projects = () => {
  const projects = [
    {
      title: "Calculator App",
      img: "./public/Calc_app.png",
      overView: "Hello World",
      repo: "https://github.com/CodingTimmyeth/react-calculor-app",
      liveLink: "https://react-calculor-app.vercel.app/",
    },
    {
      title: "IP Tracker",
      img: "./public/IP_tracker_app.png",
      overView: "Hello World",
      repo: "https://github.com/CodingTimmyeth/IP-Tracker",
      liveLink: "https://celadon-stardust-1f05d5.netlify.app/",
    },
    {
      title: "SignUp Form",
      img: "./public/Newsletter_Form.png",
      overView: "Hello World",
      repo: "https://github.com/CodingTimmyeth/Newsletter-Signup-Form",
      liveLink: "https://main--candid-paletas-9fe41e.netlify.app/",
    },
    {
      title: "URL Shortener",
      img: "./public/URL_Shortener.png",
      overView: "Hello World",
      repo: "https://github.com/CodingTimmyeth/Shortening-URL",
      liveLink: "https://shortening-url.vercel.app/",
    },
    {
      title: "CrowdFunding Landing Page",
      img: "./public/CrowdFunding.png",
      overView: "Hello World",
      repo: "https://github.com/CodingTimmyeth/CrowdFunding-Main-Page",
      liveLink: "https://codingtimmyeth.github.io/CrowdFunding-Main-Page/",
    },
  ];
  return (
    <section className="text-start ">
      <h1 className="font-bold text-2xl mb-5">Featured Projects:</h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {projects.map((project) => (
          <div key={project.title} className="">
            <img
              src={project.img}
              alt="Project ThumbNail"
              className="rounded-t-lg max-w-[300px]"
            />
            <div className="shadow-md shadow-black rounded-b-lg p-4">
              <h1>{project.title}</h1>
              <p className="text-LightGray my-3">{project.overView}</p>
              <div className="flex gap-4">
                <a href={project.repo} target="_blank">
                  <AiFillGithub />
                </a>
                <a href={project.liveLink} target="_blank">
                  <FaLink className="text-AccentBlue" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divider />
    </section>
  );
};

export default Projects;
