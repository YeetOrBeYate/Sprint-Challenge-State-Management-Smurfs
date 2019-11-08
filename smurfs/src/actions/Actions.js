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

export function getSmurfs(){

    return function(dispatch){

        dispatch(loadSmurf());

        return axios("http://localhost:3333/smurfs")
            .then((res)=>{
                let yeet = res.data;
                dispatch(addSmurf(yeet))
                console.log("from the action", yeet)
            })

    }
}