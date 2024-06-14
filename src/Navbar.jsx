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
export const Navbar = ({clickHandler,showData}) => {
  const icon= [faAddressBook,faBell,faEnvelope];
  return (
    <div className="position-fixed z-2 navbar bg-dark text-white d-flex align-items-center justify-content-between p-0 m-0">
     <div><FontAwesomeIcon className="ps-2 d-block d-md-none" onClick={()=>clickHandler('homebarshow')} icon={faBars}/></div>
      <h2 className="mt-2">Lamasocial</h2>
      <div><FontAwesomeIcon className="d-block ms-5 ms-lg-0 d-lg-none" onClick={()=>clickHandler('search')} icon={faSearch}/></div>
      <input className={`d-lg-block border rounded-pill text-center z-2 ${showData==='search'? 'search': ''}`}
        type="text"
        placeholder="Search for friend"
        style={{ width: "200px" }}
      />
      <p className="mt-2 d-sm-flex collapse gap-3 me-3">
        <span> Homepage</span>
        <span>Timeline</span>
      </p>
      <div className="position-relative">
      <div className="position-relative d-block d-md-none z-8">
          <FontAwesomeIcon onClick={()=>clickHandler('showMess')} className="fs-3" icon={faPaperPlane} />
          <p
            className="position-absolute bottom-0 ms-3 text-white z-2 bg-danger rounded-circle text-center fw-bolder"
            style={{ width: "15px", height: "15px", fontSize: "10px" }}
          >
            6
          </p>
        </div>
      <div className={`d-flex gap-3 iconbox row z-1 bg-dark ${showData==='showMess'?'showMess':''}`}>
      
        {
          icon.map((val,ind)=>{return( <div className="d-md-block col-12 col-md">
            <FontAwesomeIcon className="fs-3" icon={val} />
            <p
              className="position-absolute ms-3  d-flex flex-column flex-md-row align-items-center justify-content-center text-white z-2 bg-danger rounded-circle fw-bolder"
              style={{ width: "15px", height: "15px", fontSize: "10px",marginTop:'-30px' }}
            >
              {ind+1}
            </p>
          </div> )})
        }
       
      </div></div>
      <div style={{ height: "50px", borderRadius: "50%",paddingRight:'4%'}}>
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
