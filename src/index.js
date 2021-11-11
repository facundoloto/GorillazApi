import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <NavBar/>
,document.getElementById('nav')
);
ReactDOM.render(  
<App />
  ,document.getElementById('root')
);
//ReactDOM.render(
//<Title/>
//,document.getElementById('title')
//);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
