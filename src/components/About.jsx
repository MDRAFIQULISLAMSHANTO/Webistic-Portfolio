import React from "react";
import Navbar from "./Navbar";

import webb from "../images/teammember.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Navbar /> {/* call Navigation bar */}
      <Common
        name="Welcome to "
        imgsrc={webb}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
