import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
