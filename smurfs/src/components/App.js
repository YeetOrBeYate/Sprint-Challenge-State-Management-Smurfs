import React, { Component } from "react";
import "./App.css";
import {connect} from "react-redux";
import {getSmurfs} from "../actions/Actions";

class App extends Component {

  componentDidMount(){
    console.log("did mount?",this.props)
    this.props.dispatch(getSmurfs())
    console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.props.isLoading && <div>Loading..</div>}
        {this.props.smurfs.map((s)=>(
            <div id = {s.id}>
              <h1>{s.name}</h1>
              <p>-{s.age}</p>
              <p>-{s.height}</p>
            </div>
        ))}
  
      </div>
    );
  }
}

const mapDispatchToProps = {
  getSmurfs
}

const mapStateToProps = state =>{
  return state;
}



export default connect(
  mapStateToProps

)(App);
  


