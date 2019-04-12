import React from 'react'

let Smurf = (props) => {
  console.log(props.smurf)
  return (
    <div>
      <p>{props.smurf.name}</p>
    </div>
  )
} 

export default Smurf