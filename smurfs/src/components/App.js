import React, { Component } from "react";
import "./App.css";
import {connect} from "react-redux";
import {getSmurfs, AddNew} from "../actions/Actions";

class App extends Component {

  constructor(){
    super();
    this.state={
      name: "",
      age: "",
      height: ""
    }
  }

  handleNameChange = (e)=>{
    this.setState({
      name: e.target.value
    })
  }

  handleAgeChange = (e)=>{
    this.setState({
      age: e.target.value
    })
  }

  handleHeightChange = (e)=>{
    this.setState({
      height: e.target.value
    })
  }

  handleSumbit = (e)=>{
    e.preventDefault();
    console.log(this.state)
    this.props.dispatch(AddNew(this.state))
  }

  componentDidMount(){
    // console.log("did mount?",this.props)
    this.props.dispatch(getSmurfs())
    // console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick={() => this.props.dispatch(getSmurfs())}>Get Data</button>
        {this.props.isLoading && <div>Loading..</div>}
        {this.props.smurfs.map((s)=>(
            <div id = {s.id}>
              <h1>{s.name}</h1>
              <p>-{s.age}</p>
              <p>-{s.height}</p>
            </div>
        ))}

        <form>
          <h1>Add a smurf!</h1>
          <input 
          name = "name"
          type = "text" 
          placeholder = "name"
          value = {this.state.name}
          onChange={this.handleNameChange}></input>
          <input 
          name = "age" 
          type = "text" 
          placeholder = "age"
          value = {this.state.age}
          onChange={this.handleAgeChange}></input>
          <input 
          name = "height" 
          type = "text" 
          placeholder = "height"
          value = {this.state.height}
          onChange={this.handleHeightChange}
          ></input>
          <button onClick={this.handleSumbit}>Submit!</button>
        </form>
  
      </div>
    );
  }
}

const mapDispatchToProps = {
  getSmurfs,
  AddNew
}

const mapStateToProps = state =>{
  return state;
}



export default connect(
  mapStateToProps

)(App);
  


