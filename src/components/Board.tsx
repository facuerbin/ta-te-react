import React from 'react'
import BoardBox from './BoardBox'

export default function Board() {
    return (
        <div className = "board-container">
            <div className="columns is-vcentered">
                <BoardBox />
                <BoardBox />
                <BoardBox />
            </div>
            <div className="columns is-vcentered">
                <BoardBox />
                <BoardBox />
                <BoardBox />
            </div>
            <div className="columns is-vcentered">
                <BoardBox />
                <BoardBox />
                <BoardBox />
            </div>
            
        </div>
    )
}
