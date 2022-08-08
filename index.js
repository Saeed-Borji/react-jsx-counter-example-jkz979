import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let sec = 0;
let min = 0;
let hour = 0;

function show() {
  sec++;
  if(sec > 59)
  {
    min++;
    sec = 0;
  }
  if(min > 59)
  {
    hour++;
    min = 0;
    sec = 0;
  }
  const el = <p>{hour}:{min}:{sec}</p>;
  ReactDOM.render(el, document.getElementById('root'));
  
}

setInterval(show, 1000);
