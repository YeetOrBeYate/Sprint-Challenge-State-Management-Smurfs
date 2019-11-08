import axios from 'axios';

export const add = "ADD";
export const loading = "LOADING";
export const newS = "NEW";


//command functions
export function addSmurf(data){
    return{type: add, payload: data}
}

export function loadSmurf(){
    return{type:loading}
}

export function addNewSmurf(){
    return{}
}

export function AddNew(smurf){

    return function(dispatch){

        dispatch(loadSmurf());

        return axios.post("http://localhost:3333/smurfs", smurf)
            .then((res)=>{
                console.log("post response", res.data);
                let yate = res.data;

                dispatch(addSmurf(yate))
            })
    }
}

export function getSmurfs(){

    return function(dispatch){

        dispatch(loadSmurf());

        return axios.get("http://localhost:3333/smurfs")
            .then((res)=>{
                let yeet = res.data;
                dispatch(addSmurf(yeet))
                console.log("from the action", yeet)
            })

    }
}