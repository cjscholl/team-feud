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
import RoundOver from './components/RoundOver';
import Winner from './components/Winner';
import CreateTeam from './components/CreateTeam';
import ViewTeams from './components/ViewTeams';

export const App = () => (
  <>
    <Header />
    <Content>
      <Router basename="/teamfeud">
        <Route exact path="/" component={GameMenu} />
        <Route path="/start" component={StartMenu} />
        <Route exact path="/teams" component={ViewTeams} />
        <Route path="/teams/:teamId" component={CreateTeam} />
        <Route path="/game/winner" component={Winner} />
        <Route exact path="/game/:gameId/:roundId" component={Game} />
        <Route exact path="/game/:gameId/:roundId/over" component={RoundOver} />
        {/* <Route path="/create" render={() => <CreateMenu />} /> */}
      </Router>
    </Content>
  </>
);

export default App;
