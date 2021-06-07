import React, { useState } from 'react'

export interface BoardBoxProps {
    id: number,
    player: string,
    value: string | null;
}


export default function BoardBox({id, player, value}: BoardBoxProps) {
    const [boardValue, setValue] = useState(value);
    let [elementHover, setHover] = useState("board-box"); 
    
    function clickHandler() :void{
        if (!boardValue) {
            setValue(player);
            setHover("board-box");
        }     
    }

    function hoverHandler() :void{
        if (!boardValue) {
            setHover("board-box board-box-hover");
        }
    }

    function mouseOutHandler() :void{
        if (!boardValue) {
            setHover("board-box");
        }
    }

    function setState (value: string | null): void{
        if (value === "O" || value === "X") {
            value = value;
        } else {
            value = null;
        }
    }

    return (
        <div 
        onClick = {clickHandler}
        onMouseOver = {hoverHandler}
        onMouseOut = {mouseOutHandler}
        className= {`column is-one-third ${elementHover} is-centered`}>
                {boardValue}
        </div>
    )
}
