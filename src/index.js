import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));
//Thunk is what allows asyn when its fetching. Everything is immutable. Acyc hits and end point and waits. Redux handles state by making a picture of a picture the wipe away of a photo is thunk.
//Action is clicking the button to take the picture.
//A reducer is what hands the changed""" data.
//the state/store is what holds the data that will be used. This is the photo lib. Never make more than one store in the applicaion

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

//Random generator for studio Gibli films//

//-- Click button -> Generate New film //
//Button selects randomly from array of Id's that keep the data//

//Display data to the page//
