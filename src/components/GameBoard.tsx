import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Button from './Button'
import Board from './Board';
import Welcome from "./Welcome";

export default function GameBoard() {
    return (
        <div className=  "board-container columns is-vcentered">
            <div className="board column is-half is-offset-one-quarter">
            <Router>
                <Switch>
                    <Route exact path="/play" component={Board} />
                    <Route exact path="/" component={Welcome} />
                </Switch>
            </Router>
            </div>
        </div>
    )
}


