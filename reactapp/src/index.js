import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

setInterval(() => {
  let time =(
    <div>
      <h1>hello react</h1>
      <div>the time is {new Date().toLocaleTimeString()}</div>
    </div>
  )
}, 1000);

ReactDOM.render(<Card  /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
