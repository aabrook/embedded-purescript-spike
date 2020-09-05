import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Counter from './Counter'
import { jsCounter as Counter } from "./MyApp/Components/Counter.purs";

function App() {
  return (
    <div className="App">
      <Counter label="Click me!" />
    </div>
  );
}

export default App;
