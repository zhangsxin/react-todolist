import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

let data = [
    {'id':0,'text':'周一','complete':false},
    {'id':1,'text':'周二','complete':false},
    {'id':2,'text':'周三','complete':false},
  ]

ReactDOM.render(
  <App data={data} />, 
  document.getElementById('root'));
registerServiceWorker();
