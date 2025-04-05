import { useEffect, useState } from "react";

import Loader from "react-loaders";

import WordCloud from "./wordcloud";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I have a strong foundation in development and operations, with a
            focus on creating seamless, efficient systems. Designing scalable
            applications, and working with backend technologies to deliver
            reliable solutions.
          </p>
          <p>
            My skill set spans across full-stack development using React Native
            mobile app development and MERN stack. I’m committed to staying
            updated with the latest advancements in JavaScript ecosystems and
            continually refining my expertise to build scalable,
            high-performance applications across web and mobile platforms.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
