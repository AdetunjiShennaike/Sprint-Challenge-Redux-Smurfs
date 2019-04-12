import React from 'react'

export let Smurf = (props) => {
  console.log(props.smurf)
  return (
    <div>
      <p>{props.smurf.name}</p>
    </div>
  )
} 

