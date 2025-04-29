/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import {
  faAws,
  faGitAlt,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFiletypeSql } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            "I’m a Full Stack Engineer with 1 years of experience, focused on
            building seamless mobile applications using React Native. I bring
            expertise in hybrid mobile apps, also skilled in full-stack web
            solutions, backend technologies and Databases."
          </p>
          <p>
            I’m passionate about solving real-world problems through innovative
            technology and continuously learning to stay ahead of industry
            trends. Whether it's streamlining infrastructure or building
            scalable applications, I bring a holistic approach to every project.
          </p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <SiMongodb />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FaReact />
            </div>
            <div className="face4">
              <BsFiletypeSql />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
