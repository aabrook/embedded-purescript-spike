import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter'
// import { Counter } from "./MyApp";

function App() {
  return (
    <div className="App">
      <Counter label="Click me!" />
    </div>
  );
}

export default App;