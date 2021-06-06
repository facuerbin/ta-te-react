import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <header>
                <Router>
                        <Link to={"/"}>
                            <h1 className="titulo">
                                ¡Ta-Te-React!
                            </h1>
                        </Link>
                </Router>
            </header>
        )
    }
}
