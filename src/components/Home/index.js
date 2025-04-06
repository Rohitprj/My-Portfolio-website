import { useEffect, useState } from "react";

import Loader from "react-loaders";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import LogoTitle from "../../assets/images/letter-r.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = "ohit kumar".split("");

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

            <br className="desktop-break" />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br className="mobile-break" />

            <img src={LogoTitle} />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br className="desktop-break" />
            <br className="mobile-break" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Software ".split("")}
              idx={22}
            />

            <br className="mobile-break" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Engineer".split("")}
              idx={22}
            />
            <br className="desktop-break" />
            <br className="mobile-break" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Fullstack".split("")}
              idx={22}
            />
          </h1>
          <br className="mobile-break" />
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
        <div className="logo-wrapper">
          <Logo />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
