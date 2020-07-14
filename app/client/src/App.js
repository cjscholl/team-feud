import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import GameMenu from './components/GameMenu';
import StartMenu from './components/StartMenu';
import Game from './components/Game';

export const App = () => (
    <Router basename="/teamfeud">
        <Route path="/home" component={GameMenu}/>
        <Route path="/start" component={StartMenu}/>
        <Route path="/game" component={Game}/>
        <Route path="/create" render={() => <CreateMenu/>}/>
    </Router>
)

export default App;