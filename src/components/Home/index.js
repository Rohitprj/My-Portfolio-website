import { useEffect, useState } from "react";

import Loader from "react-loaders";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import LogoTitle from "../../assets/images/letter-r.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import styles from "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = "ohit kumar".split("");
  const jobArray = "Software Engineer".split("");
  const interestArray = "FullStack".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <img src={LogoTitle} className="right-align-logo" /> */}
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
