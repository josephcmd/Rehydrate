import React from "react"
import './App.css'
import Circle from "./components/Circle"
import Navbar from "./components/Navbar"
import DatePickers from "./components/Date"
import Graph from "./components/Graph"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login"
function App() {
  return (
    <Router>
      
      <Route path="/login" component={Login}/>
      <Route exact path="/">
    <div className="bg-gray-800 h-screen">
      <Navbar/>
      <Circle/>
      <DatePickers/>
      <Graph/>
    </div>
    </Route>
    </Router>
  );
}

export default App;
