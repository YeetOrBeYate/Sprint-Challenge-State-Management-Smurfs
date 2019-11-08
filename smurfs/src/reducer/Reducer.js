
import React from "react";

import {add, loading} from "../actions/Actions";





const initialState = {
    smurfs: [],
    isLoading: false
}


console.log("state", initialState);

function Reducer(state = initialState, action){
    switch(action.type){
        case loading:
            return{...state, isLoading: true}
        case add:
            return{...state, smurfs: action.payload, isLoading:false}
        default:
            return state
    }
}

export default Reducer;



