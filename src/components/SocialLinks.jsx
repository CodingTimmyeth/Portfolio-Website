import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const SocialLinks = () => {
  const socialMediaIcons = [
    {
      id: 1,
      social: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/tommy-miguel/",
      color: "text-purple-500",
    },
    {
      id: 2,
      social: <BsGithub />,
      link: "https://github.com/CodingTimmyeth",
      color: "",
    },
  ];
  return (
    <ul className="flex gap-5 text-2xl h-[28px] w-fit">
      {socialMediaIcons.map((icon) => (
        <li key={icon.id} className="flex items-center gap-5 cursor-pointer">
          <a href={icon.link} className={icon.color} target="_blank">
            {icon.social}
          </a>
          /
        </li>
      ))}
      <li className="w-[28px]">
        <a href="https://twitter.com/TimmykillerSol" target="_blank">
          <img src="./public/X_logo_2023.svg" alt="X Logo" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
