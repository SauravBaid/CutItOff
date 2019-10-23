import React from 'react';
import Navbar from './components/navbar';
import Main from './components/main'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import cardRender from './components/cardRender';
function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Open Sans, sans-serif' }} >
        <Navbar />
        <Switch>
          <Route exact path="/news" component = {cardRender} />
          <Route path ="/" component = {Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
