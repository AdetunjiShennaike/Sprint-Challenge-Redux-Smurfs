import React from 'react'

class SmurfList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: '',
      smurfs: props.smurf,
      newSmurf: props.newSmurf
      
    }
  }

  handleChanges = event => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  }
  
  render(){console.log(this.state.smurfs)
  return ( 
    <div>
      <form>
      <input
        type='text'
        onChange={this.handleChange}
        value={this.state.name}
        placeholder='Name'
        name='name'
      />
      <input
        type='number'
        onChange={this.handleChange}
        value={this.state.age}
        placeholder='Age'
        name='age'
      />
      <input
        type='number'
        onChange={this.handleChange}
        value={this.state.height}
        placeholder='Height'
        name='height'
      />
      <button onClick={this.newSmurf}>Add</button>
      </form>
    </div> 
  )}
}

export default SmurfList 