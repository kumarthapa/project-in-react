//import {ADD_TO_TEXT} from "../constants";
const initialState = {
  list :[],
  hett :['heoo1234']
};
export default function cardItems(state = initialState, action) {
  switch (action.type) {
      case 'ADD_TODO':
      const {id,data} = action.payload
      //console.log('reducer', action)
      return {...state, 
        list: [
          ...state.list,
          {
             id: id,
             data: data
          }
      ]
      };
    default:
      return state;
  }
}

