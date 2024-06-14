import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import React, { useState } from 'react'

import './index.css'
import Homebar from './Homebar'
import { Navbar } from './Navbar'
import Homepage from './Homepage'
import Homepage2 from './Homepage2'
const App = () => {
  const [showData,setShowData]= useState(null);
  const clickHandler=(data)=>{
    setShowData(data===showData ? null :data)
// console.log(data)
console.log(data,showData)
}


  return (<>
    <Navbar clickHandler={clickHandler} showData={showData}/>
    <div className='row'>
    <div className={`col d-md-block me-0 pe-0 homebar bg-white ${showData==='homebarshow'?'homebarshow':''}`} style={{minWidth:'225px', maxWidth:'240px'}}><Homebar clickHandler={clickHandler} showData={showData}/></div>
    <div className="col col-sm col-md-5 col-lg-6 p-0 homepageComp" ><Homepage clickHandler={clickHandler} showData={showData}/></div>
    <div className="col-0 col-sm bg-white" style={{minWidth:'171px'}}><Homepage2 clickHandler={clickHandler} showData={showData}/></div></div></>
  )
}

export default App