import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import {useNavigate} from 'react-router-dom';
import {Context} from './Context';
import React, { useState } from 'react';



//import {BrowserRouter,Route,Routes } from 'react-router-dom'; // normal react routing cheyyumbol

import {Route,Routes} from 'react-router-dom';


function App() {

  const history = useNavigate();

  const [state, setState] = useState('Carr')


  function Clicking() {
    console.log('testing');
    history('/about');}


  return (
    <div className="App">
      
      <h1>Router Demo </h1>
      
      {/* <BrowserRouter>  // button vekumbol ith venda, wrap this in index.js file*/}

      <button onClick={Clicking}> About App...</button>   

{/* --context.provider il value pass cheyyanam, direct 'state' or as an object-- */}
        <Context.Provider  value={{data:state}}> 
            <Routes>

                <Route exact path='/' element={<Home/>} />                                                          

                {/* <Route path='/about' element={<About/>} /> */}

                <Route path='/about' element={<About new={'Benz'}/>} />
                            
            </Routes>

        </Context.Provider>
             
      
       {/* </BrowserRouter> */}
      
    </div>
  );
}

export default App;
