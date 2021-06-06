import React from 'react'
import {Link} from 'react-router-dom';

export default function Button() {


    return (
        <div>
            <Link to = {'/play'} className="button is-success is-large">
                <h2>Jugar</h2>
            </Link>
        </div>
    )
}
