//'action' my parant is services/reducers.js
import {ADD_TO_CART} from '../constants';
export const addToCart=(data)=>{
    //console.log('action', data);
    return{
           type:ADD_TO_CART,
           data:data
    }
}