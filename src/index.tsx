import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './Counter'
// import { Counter }  from "./MyApp";

// import { jsCounter as Counter } from "./MyApp/Components/Counter.purs";
// const Counter = React.lazy(() => import('./Counter'))
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('other-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const thisWindow: any = window
if (!thisWindow.components) {
  thisWindow.components = {}
}

thisWindow.components['purescript-app'] = { Counter }

console.log('My counter: ', { Counter })