import React from "react";
import SocialLinks from "../SocialLinks";
import Button from "../Button";
import Divider from "../Divider";

const Hero = () => {
  return (
    <main className="">
      <img src="public/Tom-v1.png" alt="Hero Picture" />
      <section className="text-start mt-4 mb-10">
        <h1 className="text-2xl font-bold mb-2">I’m Thomas Miguel -</h1>
        <h2 className="text-SubText text-xl mb-3">Full Stack Developer</h2>
        <p className="text-sm leading-5 mb-4">
          With expertise in the MERN stack, I craft captivating websites that
          harmoniously integrate design and back-end functionality.
        </p>
        <div className="mb-4">
          <SocialLinks />
        </div>
        <Button />
      </section>
      <Divider />
    </main>
  );
};

export default Hero;
