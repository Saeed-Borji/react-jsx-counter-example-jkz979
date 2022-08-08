import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let sec = 0;

function show() {
  sec++;
  const el = <p>{sec}</p>;
  ReactDOM.render(el, document.getElementById('root'));
}

setInterval(show, 1000);
