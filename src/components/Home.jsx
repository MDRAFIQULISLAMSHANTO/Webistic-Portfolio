import React from "react";
import web from "../images/banner.jpg";
import homeportfolio from "../images/homepage-portfoliovideo.mp4";
import Card from "./Card";
import Common from "./Common";
import Navbar from "./Navbar";
import Sdata from "./Servicedata";

const Home = () => {
  return (
    <>
      <div className="div">
        <Navbar />
        <Common
          name="Enrich your business"
          imgsrc={web}
          visit="/service"
          btname="Get Started"
        />
        <br></br>
        {/* Service page including  */}
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      text={val.text}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mx-auto">
          <div className="d-flex justify-content-center  ">
            <div className="border border-dark p-2 mb-2 border-opacity-50">
              <video autoPlay loop width="500" height="400" controls>
                <source src={homeportfolio} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
