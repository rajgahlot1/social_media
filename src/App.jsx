import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import React from 'react'

import './index.css'
import Homebar from './Homebar'
import { Navbar } from './Navbar'
import Homepage from './Homepage'
import Homepage2 from './Homepage2'
const App = () => {
  return (<>
    <Navbar/>
    <div className='row'>
    <div className="col collapse d-md-block" style={{minWidth:'230px', maxWidth:'240px'}}><Homebar /></div>
    <div className="col col-md-6 p-0"><Homepage /></div>
    <div className="col-0 col-sm bg-white"><Homepage2 /></div></div></>
  )
}

export default App