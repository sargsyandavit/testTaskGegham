/**
 * @file
 * Contain Cat(main) reducer.
 */
import type { catInitalStateType } from './../../typing';

import { SET_CATEGORES, SET_CAT_DATA } from "../ActionTypes/CatActionTypes";

const inishalState = {
    data: [],
    categores: []
};

export default function CatReducer(state: catInitalStateType = inishalState, action: any){
 switch(action.type){
   case SET_CATEGORES: 
   return {
      ...state,
      categores: [...action.payload]
    }
    
    case SET_CAT_DATA: 
      return {
        ...state,
        data: [...(action.isNewCategores ?  [] : state.data), ...action.payload]
      }
    
    
    default:
     return state;
  };
};