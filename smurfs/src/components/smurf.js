import React from 'react'

let Smurf = (props) => {
  console.log(props.smurf)
  return (
    <div>
      <p>name: {props.smurf.name}</p>
      <p>age: {props.smurf.age}</p>
      <p>height: {props.smurf.height}</p>
    </div>
  )
} 

export default Smurf