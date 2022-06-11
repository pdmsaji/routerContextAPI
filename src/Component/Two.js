import React, {useContext} from 'react';
import {Context} from '../Context';


function Two(props) {

 const {data} = useContext(Context);
 // we have to use the data provided by contextProvider here, 
 //so use useContext and save it to a variable or object.
 //props vazhi edukkam or context vazhiyum edukkam data

 // use same name as it is passed from the origin, 
 //here it is 'data',(an object.)


  return (
        <div style={{backgroundColor:'red', width: '500px'}} >
             <h1> Layer Two is having a new {data} {props.new}</h1>
        </div>
  )
}

export default Two