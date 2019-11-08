import axios from 'axios';

export const add = "ADD";
export const loading = "LOADING";


//command functions
export function addSmurf(data){
    return{type: add, payload: data}
}

export function loadSmurf(){
    return{type:loading}
}

function getSmurfs(){

    return function(dispatch){

        dispatch(loadSmurf());

        return axios("http://localhost:3333/smurfs")
            .then((res)=>{
                let yeet = res;
                dispatch(addSmurf(yeet))
            })

    }
}