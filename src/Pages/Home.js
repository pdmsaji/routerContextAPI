import React from 'react';
//import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import About from './About';



function Home() {

const history = useNavigate();


function Clicking() {
  history('/about');
  
}

  return (
        <div>
        <h1> Home </h1>

        <button onClick={Clicking}>Home navigation </button>

      {/* <Link to='/about'>Click to about</Link> */}


     
        </div>
  )
}

export default Home