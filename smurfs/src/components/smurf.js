import React from 'react'

let Smurf = (props) => {
  return (
    <div>
      <p>name: {props.smurf.name}</p>
      <p>age: {props.smurf.age}</p>
      <p>height: {props.smurf.height}</p>
    </div>
  )
} 

export default Smurf