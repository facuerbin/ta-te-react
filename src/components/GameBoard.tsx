import React from 'react'
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Button from './Button'
import Board from './Board';

export default function GameBoard() {
    return (
        <div className=  "board-container columns is-vcentered">
            <div className="board column is-half is-offset-one-quarter">
            <Router>
                <Switch>
                    <Route exact path="/play" component={Board} />
                    <Route exact path="/" component={Button} />
                </Switch>
            </Router>
            </div>
        </div>
    )
}


