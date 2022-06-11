import React from 'react';
import Two from './Two';


function One(props) {
  return (
       <div style={{backgroundColor:'yellow', width: '1000px'}}>
            <h1> Layer One </h1>

            <Two new={props.new} ></Two>
        
        </div>
  )
}

export default One