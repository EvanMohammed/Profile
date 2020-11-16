import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import Home from './components/Home';

function App() {
  return (
    <Router basename="/profile">

    <div className="App">
    <Switch>
    
    <Route exact path="/gh-pages-url" component={Home} />
    



    </Switch>
    </div>
    </Router>
  );
}

export default App;
