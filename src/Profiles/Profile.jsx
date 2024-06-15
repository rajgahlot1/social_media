import React from "react";
import { farmerdata } from "../Homedata.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faGrinBeam,
  faLocation,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
import profilebg from "./profilebg.jpeg";
const Profile = ({ imgIndex , uniqueNumbers, setImgIndex}) => {
  const profileicon= [faFolder,faTag,faLocation,faGrinBeam]
 const textstyle =['text-danger','text-primary','text-success','text-warning']
 const content= ['Photos','Tag','Location','Feelings'] 
 return (
    <div className="p-0 m-0 profile-page" style={{ marginTop: "50px" }}>
      <div>
        <img
          src={profilebg}
          className="img-fluid fullimg w-100"
          alt=""
          style={{ height: "300px" }}
        />
      </div>
      <div className="text-center flex position-relative mb-5">
        <img
          src={farmerdata[imgIndex].farmerlogo}
          className="border border-4 border-white position-absolute rounded-circle img-fluid"
          alt=""
          style={{ height: "150px", width: "150px" }}
        />
      </div>
      <h3 className="flex pt-4" onChange={()=>console.log('hello')}>
        {farmerdata[imgIndex].farmername}
      </h3>
      <h5 className="text-center border-bottom border-3 pb-2 border-dark">
        {farmerdata[imgIndex].quote}
      </h5>

      <div className="row">
        <div className="row col-lg">
          <div className="col-12 row">
            <div className="col"></div>
            <h4 className="col text-center friend">Friends</h4>
          </div>
          <div className="col p-0">
            <div
              className="ms-3 ms-lg-4 ms-sm-5 hello"
            >
              <h3>User information</h3>
              <p className="mt-2 mibold">
                <kbd className="pe-sm-2 me-sm-3 me-lg-2">City:</kbd>
                {farmerdata[imgIndex].city}
              </p>
              <p className="mt-2 mibold">
                <kbd className="pe-sm-2 me-sm-3 me-lg-2">From:</kbd>
                {farmerdata[imgIndex].from}
              </p>
              <p className="mt-2 mibold">
                <kbd className="pe-sm-2 me-sm-3 me-lg-2">Status:</kbd>
                {farmerdata[imgIndex].status}
              </p>
            </div>
          </div>
          <div className=" col p-0 row-cols-2 row-cols-md-3 row-cols-lg-4">
            {
              uniqueNumbers.map((val,ind)=>{
                return(
                  <>
                  <img
              className="col img-fluid rounded w-50 p-2"
              style={{ maxHeight: "100px" }}
              src={farmerdata[val].farmerlogo}
              alt=""
              onClick={()=>setImgIndex(val)}
            />
                  </>
                )
              })
            }
                      </div>
        </div>
        <div className="col-lg-6 homepage ms-2 ms-lg-4 me-lg-0 mb-lg-0 pb-lg-0 d-flex">
          <div
            className="w-100"
            style={{
              boxShadow: "0px 0px 3px 1px #9a95a1",
              borderRadius: "10px",
            }}
          >
            <div className="d-flex">
              <img
                src={farmerdata[imgIndex].farmerlogo}
                className="mt-2 ms-2 img-fluid rounded-circle"
                style={{ width: "100px", height: "100px" }}
                alt="farmer"
              />
              <h3 className="flex pt-3 ps-md-5 pe-lg-4 ps-1">
                {farmerdata[imgIndex].question}
              </h3>
            </div>
            <hr />
            <div className="d-flex flex-row align-items-center justify-content-around icons">
              {profileicon.map((val,ind)=>{
                return(
                  <div key={ind}>
                  <div className="d-flex" >
                <FontAwesomeIcon
                  className={`ms-3 me-1 mt-1 mt-lg-2 ${textstyle[ind]}`}
                  icon={val}
                />
                <p>{content[ind]}</p>
              </div>
                  </div>
                )
              })}
              {/* <div className="d-flex">
                <FontAwesomeIcon
                  className="ms-3 me-1 mt-1 mt-lg-2 text-danger"
                  icon={faFolder}
                />
                <p>Photos </p>
              </div>
              <div className="d-flex">
                <FontAwesomeIcon
                  className="ms-3 me-1 mt-1 mt-lg-2 text-primary"
                  icon={faTag}
                />
                <p>Tag</p>
              </div>
              <div className="d-flex">
                <FontAwesomeIcon
                  className="ms-3 me-1 mt-1 mt-lg-2 text-success"
                  icon={faLocation}
                />
                <p>Location</p>
              </div>
              <div className="d-flex">
                <FontAwesomeIcon
                  className="ms-3 me-1 mt-1 mt-lg-2 text-warning"
                  icon={faGrinBeam}
                />
                <p>Feelings</p> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
