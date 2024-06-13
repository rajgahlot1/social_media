import { useState } from "react";
import React from "react";
import navimg from "./images/nav_logo.jpeg";
import {
  faAddressBook,
  faBars,
  faBell,
  faEnvelope,
  faPaperPlane,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navbar = () => {
  const [iconShow,setIconShow]= useState(null);
  const icon= [faAddressBook,faBell,faEnvelope];
  const clickHandler=(data)=>{
setIconShow(iconShow===null? data: null)
  }
  return (
    <div className="position-fixed z-2 navbar bg-dark text-white d-flex align-items-center justify-content-between p-0 m-0">
     <div><FontAwesomeIcon className="ps-2 d-block d-md-none" icon={faBars}/></div>
      <h2 className="mt-2">Lamasocial</h2>
      <div><FontAwesomeIcon className="d-block ms-5 ms-lg-0 d-lg-none" onClick={()=>clickHandler('search')} icon={faSearch}/></div>
      <input className={`d-lg-block collapse border rounded-pill text-center border-1 z-2 ${iconShow==='search'? 'show': ''}`}
        type="text"
        placeholder="Search for friend"
        style={{ width: "200px" }}
      />
      <p className="mt-2 d-sm-flex collapse gap-3 me-3">
        <span> Homepage</span>
        <span>Timeline</span>
      </p>
      <div className="d-flex gap-3">
        {
          icon.map((val,ind)=>{return( <div className="position-relative d-md-block collapse">
            <FontAwesomeIcon className="fs-3" icon={val} />
            <p
              className="position-absolute positoin-sm-relative bottom-0 ms-3 text-white z-2 bg-danger rounded-circle text-center fw-bolder"
              style={{ width: "15px", height: "15px", fontSize: "10px" }}
            >
              {ind+1}
            </p>
          </div> )})
        }
        <div className="position-relative d-block d-md-none">
          <FontAwesomeIcon className="fs-3" icon={faPaperPlane} />
          <p
            className="position-absolute bottom-0 ms-3 text-white z-2 bg-danger rounded-circle text-center fw-bolder"
            style={{ width: "15px", height: "15px", fontSize: "10px" }}
          >
            6
          </p>
        </div>
      </div>
      <div style={{ height: "50px", borderRadius: "50%"}}>
        <img
          src={navimg}
          alt="hell"
          className="img-fluid me-sm-3 pe-sm-1"
          style={{
            height: "50px",
            border: "1px solid black",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};
