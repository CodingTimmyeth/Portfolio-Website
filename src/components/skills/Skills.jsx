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
      color: "bg-red-500",
    },
    {
      name: "CSS3",
      icon: <BiLogoCss3 />,
    },
    {
      name: "JavaScript",
      icon: <RiJavascriptFill />,
    },
    {
      name: "Nodejs",
      icon: <BiLogoNodejs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <BiLogoMongodb />,
    },
    {
      name: "Reactjs",
      icon: <BiLogoReact />,
    },
    {
      name: "TailwindCss",
      icon: <BiLogoTailwindCss />,
    },
    {
      name: "Sass",
      icon: <DiSass />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Github",
      icon: <AiFillGithub />,
    },
    {
      name: "Firebase",
      icon: <BiLogoFirebase />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
  ];
  return (
    <section className="mt-10 text-start" id="skills">
      <h1 className="text-2xl mb-4">Skills:</h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {languages.map((language) => (
          <div
            key={language.name}
            className="flex flex-col items-center p-4 rounded-lg "
          >
            <p className="text-2xl mb-2">{language.name}</p>
            <div className="text-5xl">{language.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
