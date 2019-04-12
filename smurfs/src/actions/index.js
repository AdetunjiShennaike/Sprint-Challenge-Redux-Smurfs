/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export let FETCH = 'FETCH'
export let SUCCESS = 'SUCCESS'
export let FAIL = 'FAIL'


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const grabSmurfs = () => dispatch => {
  dispatch({ type: FETCH })

  axios.get('http://localhost:3333/smurfs')
  .then( res => {console.log('action', res)
    dispatch({ type: SUCCESS, payload: res.data })
  })
  .catch( err => {
    dispatch({ type: FAIL, payload: err})
  })  
}

export let ADD_START = 'ADD_START'
export let ADD_SUCCESS = 'ADD_SUCCESS'
export let ADD_FAIL = 'ADD_FAIL'


export const addSmurfs = (newSmurf) => dispatch => {
  dispatch({ type: ADD_START })

  axios.post('http://localhost:3333/smurfs', newSmurf)
  .then( res => {console.log('post', res)
    dispatch({ type: ADD_SUCCESS, payload: res.data })
  })
  .catch( err => {
    dispatch({ type: ADD_FAIL, payload: err})
  })  
}