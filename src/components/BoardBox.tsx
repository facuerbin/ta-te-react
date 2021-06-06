import React from 'react'

export interface BoardBoxProps {
    value: string | null;
}


export default function BoardBox() {
    const props: BoardBoxProps = {value = "X"};
    
    function setState (value: string | null): void{
        if (value === "O" || value === "X") {
            props.value = value;
        } else {
            props.value = null;
        }
    }

    return (
        <div className="column is-one-third board-box is-centered">
                {props.value}
        </div>
    )
}
