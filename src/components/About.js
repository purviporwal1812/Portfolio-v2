import React from "react";
import AboutImg from "./about1.png";
import AboutImg1 from "./about2.png";

export default function About() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8">
            <div className="words">
              I am a user experience designer who enjoys seamlessly bridging the
              gap between people and digital space by day, and a lofi loving
              doodler by night.
            </div>
          </div>
          <div className="col-sm-4">
            <img className="myImg" src={AboutImg} alt="About 1" />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-4">
            <img className="myImg" src={AboutImg1} alt="About 1" />
          </div>
          <div className="col-sm-8">
            <div className="words">
              I am a user experience designer who enjoys seamlessly bridging the
              gap between people and digital space by day, and a lofi loving
              doodler by night.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
