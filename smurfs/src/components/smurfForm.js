import React from 'react'

import { connect } from 'react-redux'

import { addSmurfs } from '../actions/'

class SmurfList extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  handleChange = event => {
    console.log('event', event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  }

  newSmurf = event => {
    event.preventDefault()
    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurfs(newSmurf)
  }
  
  render(){
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
      <button type='submit' onClick={this.newSmurf}>Add</button>
      </form>
    </div> 
  )}
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetching,
  error: state.error,
  addingSmurf: state.addingSmurf,
})

export default connect( mapStateToProps, { addSmurfs } )(SmurfList);