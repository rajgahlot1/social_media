import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from '@fortawesome/free-solid-svg-icons';
import birthday from './images/birthday.jpg'
import { farmerdata } from './Homedata';
const Homepage2 = () => {
  return (<>
    <h3><div className='badge bg-primary d-sm-none position-fixed end-0 z-5 size-large'style={{borderTopRightRadius:'0px',borderBottomRightRadius:'0px',top:'150px' }}>Online Friends</div></h3>
    <div className='homepage2 d-sm-block collapse'>
      <div className='d-flex'><FontAwesomeIcon className='text-danger bg-warning fs-1' style={{borderRadius:'5px'}} icon={faGift}/><p className='ms-2 '><span className='fw-bold'>Pola Foster</span> and <span className='fw-bold'>3 other friends</span> have a birthday today.</p></div>
    <div><img src={birthday} className='img-fluid w-100' alt="" /></div>
    <div style={{minWidth:'141px'}}><h4>Online Friends</h4>
    {farmerdata.map((val)=>{
      return(
        <>
        <div className='d-flex align-items-align-self-lg-center mt-2'><div className='position-relative'><div className='position-absolute bg-primary rounded-circle online border border-2 border-light' style={{height:'11px',width:'11px',right:'2px',top:'2px'}}></div><img src={val.farmerlogo} style={{height:'50px',width:'50px'}} className='rounded-circle' alt="" /></div><p className='mt-2 ms-2'>{val.farmername}</p></div>
        </>
      )
    })}
    </div>
    </div></>
  )
}

export default Homepage2