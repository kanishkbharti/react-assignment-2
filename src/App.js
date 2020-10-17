import React from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Home } from './components/Home';
import AppBar from "./components/Nav";

function App() {

  return (
    <div className="App">
      <AppBar />
      <Home />
    </div>
  );
}

export default App;
