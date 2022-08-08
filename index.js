import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let sec = 0;
let min = 0;
let hour = 0;

function show() {
  sec++;
  const el = <p>{hour}:{min}:{sec}</p>;
  ReactDOM.render(el, document.getElementById('root'));
}

setInterval(show, 1000);
