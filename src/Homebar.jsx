import React from "react";
// import farmer from './images/farmer.jpg'
// import Homepage from './Homepage.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { homedata, farmerdata } from "./Homedata";
export const Homebar = ({ setImgIndexdata, clickHandler }) => {
  return (
    <>
      <div
        className="d-md-block position-fixed z-1 fs-5 bg-white homeSlide pb-4"
        style={{ top: "59px", minWidth: "230px", maxWidth: "240px" }}
      >
        {homedata.map((val, ind) => {
          return (
            <div key={ind}>
              <div className="d-flex">
                <FontAwesomeIcon
                  className="mt-2 ms-2"
                  style={{ width: "20px", height: "20px" }}
                  icon={val.icon}
                />
                <p style={{ cursor: "pointer" }} className="ms-2">
                  {val.name}
                </p>
              </div>
            </div>
          );
        })}
        <div className="butn btn">Show More</div>
        <hr />
        <div></div>
        <div>
          {farmerdata.map((val, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  setImgIndexdata(ind);
                  clickHandler("null");
                  window.scrollTo(0,0)
                }}
                className="d-flex ps-2 pt-2"
              >
                <img
                  src={val.farmerlogo}
                  alt=""
                  className="img-fluid rounded-circle cursor-pointer"
                  style={{ width: "50px", height: "50px", cursor: "pointer" }}
                />
                <p className="mt-2 ms-1 fs-5" style={{ cursor: "pointer" }}>
                  {val.farmername}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Homebar;
