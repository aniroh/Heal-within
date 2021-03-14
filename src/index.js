import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomeComponent';
import Foot from './FootComponent';
import Nav1 from './NavigationComponent';



ReactDOM.render(
  <React.StrictMode>
    <Nav1/>
    <Home/>
    <Foot/>
  </React.StrictMode>,
  document.getElementById('root')
);

 
