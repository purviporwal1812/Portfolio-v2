import React from "react";
import "./Front.css";
import Me from "./me.png";

export default function Front() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center">
        <div className="row w-75 ">
          <div className="col-sm-8">
            <div className="hey">Hello, I am Purvi ッ</div>
            <div className="words w-75">
              I am a user experience designer who enjoys seamlessly bridging the
              gap between people and digital space by day, and a lofi loving
              doodler by night.
            </div>
          </div>

          <div className="col-sm-4">
            <img className="myImg .work-sans" src={Me} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
}
