/*
  Be sure to import in all of the action types from `../actions`
*/
import { FAIL, FETCH, SUCCESS, ADD_START, ADD_SUCCESS, ADD_FAIL } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetching: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH: 
      return {
        ...state,
        fetching: true, 
        error: ''   
      }
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        error: '',
        smurfs: action.payload
      }
    case ADD_START:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: ''
      }
    case FAIL:
    default:
      return state;
  }
};