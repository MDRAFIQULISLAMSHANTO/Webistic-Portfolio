import React, { useState } from "react";

import backgroundvideo from "../images/contact-bg5.mp4";
import Navbar from "./Navbar";

const Contact = () => {
  const [data, setData] = useState({
    fullname: " ",
    phone: " ",
    email: " ",
    message: " ",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name :${data.fullname}. Phone no: ${data.phone}.
    email: ${data.email} and my message is ${data.message}`);
  };
  return (
    <>
      <div className="contactbg overflow-auto ">
        <video autoPlay loop muted id="video-contact">
          <source src={backgroundvideo} type="video/mp4" />
        </video>
        <Navbar /> {/* call Navigation bar */}
        <div className="my-5 ">
          <h1 className="text-center ">Contact Us!</h1>
        </div>
        <div className="container contact_div bg-transparent ">
          <div className="row ">
            <div className="col-md-6 col-10 mx-auto ">
              <form onSubmit={formSubmit}>
                <div class="mb-3 ">
                  <label for="exampleInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput1"
                    aria-describedby="emailHelp"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your name "
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInput2" class="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput2"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile Number"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message{" "}
                  </label>

                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
