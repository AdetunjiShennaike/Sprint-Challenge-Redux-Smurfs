import React from 'react'

let SmurfList = (props) => {
  return (
    <div>
      <form onSubmit={props.addSmurf}>
      <input
        type='text'
        onChange={props.handleChange}
        value={props.smurf.name}
        placeholder='Name'
      />
      <input
        type='number'
        onChange={props.handleChange}
        value={props.smurf.age}
        placeholder='Age'
      />
      <input
        type='number'
        onChange={props.handleChange}
        value={props.smurf.height}
        placeholder='Height'
      />
      <button onClick={props.addSmurf}>Add</button>
      </form>
    </div> 
  )
}

export default SmurfList 