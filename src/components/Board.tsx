import BoardBox from './BoardBox'

export default function Board() {
    const player : string = "X";
    
    const boxes = [];   
    for (let index = 1; index <= 3; index++) {
        boxes.push(
        <div className="columns is-mobile is-vcentered">
            <BoardBox key={index*10+1} id={index*10+1} value={null} player={player} />
            <BoardBox key={index*10+2} id={index*10+2} value={null} player={player}/>
            <BoardBox key={index*10+3} id={index*10+3} value={null} player={player}/>
        </div>
        )
    }

    return (
        <div className = "board-container">
            {boxes}            
        </div>
    )
}
