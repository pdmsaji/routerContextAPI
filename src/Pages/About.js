import React from 'react'
import One from '../Component/One'

function About(props) {
  return (
    <div style={{backgroundColor:'blue', width:'2000px'}} >
        <h2> About </h2>

        <One new={props.new}></One>
    </div>
  )
}

export default About