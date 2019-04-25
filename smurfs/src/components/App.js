import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

import { grabSmurfs } from '../actions/'
import Smurf from './smurf';
import SmurfList from './smurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.grabSmurfs()
    // console.log('CDM', this.props)
  }

  render() {
    // console.log(this.props.smurfs)
    // console.log(Smurf)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.props.smurfs.map( event => 
          <Smurf key={event.id} smurf={event} />
        )}
        <SmurfList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetching,
  error: state.error,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf
})

export default connect( mapStateToProps, { grabSmurfs } )(App);