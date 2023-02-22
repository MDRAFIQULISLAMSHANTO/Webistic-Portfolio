import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import About from "./About";
import Blog from "./blog";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <>
      {/* <div className="div1">
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div> */}

      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" />} />

        {/*  <Navigate to="/Home" replace={true} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
