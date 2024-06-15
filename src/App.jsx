import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import React, { useState } from "react";
import "./index.css";
import Homebar from "./Homebar";
import { Navbar } from "./Navbar";
import Homepage from "./Homepage";
import Homepage2 from "./Homepage2";
import Profile from "./Profiles/Profile.jsx";
const App = () => {
  const [showData, setShowData] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  function generateUniqueRandomNumbers() {
    const numbers = [];
    while (numbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * 7); // Generates numbers from 0 to 6
      if (!numbers.includes(randomNumber)&& randomNumber!==imgIndex) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }  
  const uniqueNumbers = generateUniqueRandomNumbers();
  const setImgIndexdata = (data1) => {
    setImgIndex(data1);
    generateUniqueRandomNumbers();
  };
  const clickHandler = (data) => {
    setShowData(data === showData ? null : data);
  };
  return (
    <>
      <Navbar clickHandler={clickHandler} showData={showData} />
      <div className="row">
        <div
          className={`col-0 col-md d-md-block me-0 pe-0 homebar bg-white ${
            showData === "homebarshow" ? "homebarshow" : ""
          }`}
          style={{ minWidth: "225px", maxWidth: "240px" }}
        >
          <Homebar
            setImgIndexdata={setImgIndexdata}
            clickHandler={clickHandler}
          />
        </div>
        {/* <div className='col-12'><Profile/></div> */}
        <div className="col row m-0 p-0">
          <div className="col-12">
            <Profile uniqueNumbers={uniqueNumbers} imgIndex={imgIndex} setImgIndex={setImgIndex} />
          </div>
          <div className="col-12 col-sm col-md col-lg p-0 homepageComp">
            <Homepage />
          </div>
          <div
            className="col-0 col-sm-4 col-md-5 bg-white"
            style={{ minWidth: "171px", marginTop: "5px" }}
          >
            <Homepage2 clickHandler={clickHandler} showData={showData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
