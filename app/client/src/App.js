import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import GameMenu from './components/GameMenu';
import StartMenu from './components/StartMenu';
import Game from './components/Game';
import Header from './components/common/Header';
import Content from './components/common/Content';

export const App = () => (
  <>
    <Header />
    <Content>
      <Router basename="/teamfeud">
        <Route exact path="/" component={GameMenu} />
        <Route path="/start" component={StartMenu} />
        <Route path="/game" component={Game} />
        {/* <Route path="/create" render={() => <CreateMenu />} /> */}
      </Router>
    </Content>
  </>
);

export default App;
