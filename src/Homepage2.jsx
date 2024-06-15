import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from '@fortawesome/free-solid-svg-icons';
import birthday from './images/birthday.jpg'
import { farmerdata } from './Homedata';


const Homepage2 = ({clickHandler, showData}) => {

  return (<>
  <div className='badge bg-primary d-sm-none position-fixed end-0 size-large' onClick={()=>clickHandler('homepage2')} style={{borderTopRightRadius:'0px',borderBottomRightRadius:'0px',cursor:'default',top:'200px' }}><h6>Online Friends</h6></div>

    <div className={`${showData==='homepage2'?'homepagetwo': ''} z-7 mt-4 bg-dark bg-sm-white text-sm-dark text-white homepage2`}>
      <div className='d-flex mt-4 mt-sm-3 mb-3'><FontAwesomeIcon className='mt-2 p-2 ms-1 text-danger bg-warning fs-1' style={{borderRadius:'5px'}} icon={faGift} onClick={()=>clickHandler('hello')}/><p className='ms-2 '><span className='fw-bold'>Pola Foster</span> and <span className='fw-bold'>3 other friends</span> have a birthday today.</p></div>
    <div><img src={birthday} className='img-fluid w-100' alt="" /></div>
    <div ><h4 className='ms-3 m-sm-2 p-4'>Online Friends</h4>
    {farmerdata.map((val,ind)=>{
      return(
        <div key={ind}>
        <div className='d-flex align-items-align-self-lg-center ms-3  mt-2 pb-3'><div className='position-relative'><div className='position-absolute bg-primary rounded-circle online border border-2 border-light' style={{height:'11px',width:'11px',right:'2px',top:'2px'}}></div><img src={val.farmerlogo} style={{height:'50px',width:'50px'}} className='rounded-circle' alt="" /></div><p className='mt-2 ms-2'>{val.farmername}</p></div>
        </div>
      )
    })}
    </div>
    </div></>
  )
}

export default Homepage2