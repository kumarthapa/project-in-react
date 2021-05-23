//'action' my parant is services/reducers.js
import {ADD_TO_TEXT} from '../constants';

export const addTotext=(data)=>{
    //console.log('action');
    return{
           type:ADD_TO_TEXT,
           data:data
    }
}