import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {applyMiddleware, createStore} from 'redux';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import Reducer from "./reducer/Reducer"

const store = createStore(Reducer, applyMiddleware(thunk,logger));


ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));


