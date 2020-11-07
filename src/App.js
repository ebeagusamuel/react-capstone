import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from './feature/soccerHighlights/Nav';
import HighlightsContainer from './feature/soccerHighlights/HighlightsContainer';
import SingleHighlightPage from './feature/soccerHighlights/SingleHighlightPage';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={HighlightsContainer} />
        <Route exact path="/highlights/:id" component={SingleHighlightPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
