import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <div className="contact-section">
        <div className="row px-3">
          <div className="col-md-9">
            <h2>Save your progress</h2>
            <div className="best-price p-2">
              <p>Get to plans directly next time you visit us</p>
            </div>
          </div>
          <div className="col-md-3 seq-circl-section">
            <div className="seq-circle">
              {" "}
              <p> 75%</p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className=" fullname mt-2 ">
        <input type="text" className="name" id="name" placeholder="Name" />
      </div>

      <div className=" phnumber mt-5">
        <input
          type="number"
          className="phone"
          id="phone"
          placeholder="+91 xxxxxxxxxxx"
        />
      </div>

      <div className="contact-list mt-5 card  pt-3">
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheck} /><span className="list-color">56+ plans found</span> 
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} /><span className="list-color">From 12+ insurers</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faCheck} /> <span className="list-color">Starting @387/month</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faCheck} /> <span className="list-color">1080+ cashless hospital network
            in your city</span>
          </li>
        </ul>
      </div>

      <div className="button-acion text-center   mt-5 mb-5">
        <div className="previous col-md-12">
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-default btn-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faArrowLeft} /> Go Back
                </span>
              </button>
            </div>
            <div className="col-md-8">
              <div className="btn btn-primary btn-lg w-100">Continue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
