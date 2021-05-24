//'cardItems' my parant is services/reducers/index.js
import {ADD_TO_TEXT} from "../constants";
const initialState = {
  username:[],
};

export default function cardItems(state = initialState, action) {
  switch (action.type) {
      case ADD_TO_TEXT:
      //console.log('reducer', action)
      return {...state, username: action.data};

    default:
      return state;
  }
}
