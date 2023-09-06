import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  const languages = [
    {
      name: "HTML5",
      icon: <AiFillHtml5 />,
      color: "text-red-500",
      shadow: "shadow-red-500/50",
    },
    {
      name: "CSS3",
      icon: <BiLogoCss3 />,
      color: "text-blue-500",
      shadow: "shadow-blue-500/50",
    },
    {
      name: "JavaScript",
      icon: <RiJavascriptFill />,
      color: "text-yellow-300",
      shadow: "shadow-yellow-300/50",
    },
    {
      name: "Nodejs",
      icon: <BiLogoNodejs />,
      color: "text-green-500",
      shadow: "shadow-green-500/50",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      shadow: "shadow-white/50",
    },
    {
      name: "MongoDB",
      icon: <BiLogoMongodb />,
      color: "text-green-500",
      shadow: "shadow-green-500/50",
    },
    {
      name: "Reactjs",
      icon: <BiLogoReact />,
      color: "text-blue-300",
      shadow: "shadow-blue-300/50",
    },
    {
      name: "TailwindCss",
      icon: <BiLogoTailwindCss />,
      color: "text-blue-400",
      shadow: "shadow-blue-500/50",
    },
    {
      name: "Sass",
      icon: <DiSass />,
      color: "text-pink-500",
      shadow: "shadow-pink-500/50",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-red-500",
      shadow: "shadow-red-500/50",
    },
    {
      name: "Github",
      icon: <AiFillGithub />,
      color: "white",
      shadow: "shadow-white/50",
    },
    {
      name: "Firebase",
      icon: <BiLogoFirebase />,
      color: "text-yellow-500",
      shadow: "shadow-yellow-500/50",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "text-purple-500",
      shadow: "shadow-purple-500/50",
    },
  ];
  return (
    <section className="mt-10 text-start" id="skills">
      <h1 className="text-2xl mb-4">Skills:</h1>
      <div className="flex flex-wrap items-center justify-center gap-14">
        {languages.map((language) => (
          <div
            key={language.name}
            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer shadow-lg ${language.shadow} transition-all hover:-translate-y-6

            `}
          >
            <p className="text-2xl mb-2">{language.name}</p>
            <div className={`text-8xl  ${language.color}`}>{language.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
