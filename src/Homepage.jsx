import React from "react";
import farmer1 from "./images/farmer1.jpg";
import { farmerdata } from "./Homedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEllipsisV,
  faFolder,
  faGrinBeam,
  faLocation,
  faTag,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <>
      <div
        className="homepage me-2 ms-4 border"
        style={{ boxShadow: "0px 0px 3px 1px #9a95a1", borderRadius: "10px" }}
      >
        <div className="container">
          <div className="d-flex">
            <img
              src={farmer1}
              className="mt-2 ms-2 img-fluid rounded-circle"
              style={{ width: "100px", height: "100px" }}
              alt="farmer"
            />
            <h3 className="flex pt-3 ps-md-5 ps-1">
              What is in your mind Arpit ?
            </h3>
          </div>
          <hr />
          <div className="d-flex flex-row align-items-center justify-content-around icons">
            <div className="d-flex"><FontAwesomeIcon
              className="ms-1 me-1 mt-1 mt-lg-2 text-danger"
              icon={faFolder}
            />
            <p>Photos </p>
           </div> <div className="d-flex"><FontAwesomeIcon
              className="ms-3 me-1 mt-1 mt-lg-2 text-primary"
              icon={faTag}
            />
            <p>Tag</p>
           </div> <div className="d-flex"><FontAwesomeIcon
              className="ms-3 me-1 mt-1 mt-lg-2 text-success"
              icon={faLocation}
            />
            <p>Location</p>
           </div> <div className="d-flex"><FontAwesomeIcon
              className="ms-3 me-1 mt-1 mt-lg-2 text-warning"
              icon={faGrinBeam}
            />
            <p>Feelings</p>
          </div></div>
        </div>
      </div>
      {farmerdata.map((val) => {
        return (
          <div
            className="mt-2 me-2 ms-4 ms-md-2 border"
            style={{
              boxShadow: "0px 0px 3px 1px #9a95a1",
              borderRadius: "10px",
            }}
          >
            <div className="d-flex farmname w-100 position-relative">
              <img
                className="ms-2 mt-1 rounded-circle"
                style={{ height: "50px", width: "50px" }}
                src={val.farmerlogo}
                alt=""
              />
              <h3 className="mt-1  flex p-2 fs-4">{val.farmername}</h3>
              <h4 className=" p-2 fs-6 fs-md-1 fw-light flex">5 mins ago</h4>
              <div className="position-absolute mt-2 end-0 me-4 fs-5">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
            <p className="ms-2">{val.sentence}</p>
            <img
              src={val.post}
              className="mt-2 me-2 ms-2 mb-4 img-fluid"
              style={{ width: "97%" }}
              alt=""
            />
            <div>
              <div className="homepageicon d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <FontAwesomeIcon
                    className="fs-2 bg-primary text-white m-1 p-2 mt-0 rounded-circle"
                    icon={faThumbsUp}
                  />
                  <FontAwesomeIcon
                    className="fs-2 bg-danger text-white m-1 p-2 mt-0 rounded-circle"
                    icon={faHeart}
                  />
                  <p className="mt-2 ms-3">{val.likes} people like it</p>
                </div>
                <div
                  className="me-3 mb-2"
                  style={{ borderBottom: "1px solid black" }}
                >
                  {val.comments} comments
                </div>
              </div>
              <div></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Homepage;
