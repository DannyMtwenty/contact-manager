import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux'

//store -- global state

//action ---> action is a plain object that contains a type property
const increment = () => {
  return {
    type: 'INCREMENT',
    payload: 'Hello'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
    payload: 'Hello'
  }
}

//reducer -- reducer is a function that takes the previous state and an action and returns the next state
const counter = (state = 0, action) => {
     switch (action.type) {
        case 'INCREMENT': return state + 2; 
        break;
        case 'DECREMENT': return state - 12;
        break;
        default: return state;
     }

}
//print the state to the console
const store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

//dispatch   action to reducer
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

