import React, {Component} from 'react';
import GameOfLifeEngine from '../lib/GameOfLifeEngine.js';

class GameOfLife extends Component{
    constructor(props){
        super(props);
        this.rowsCount = 10;
        this.colsCount = 20;
        this.engine = new GameOfLifeEngine({
            rows : this.rowsCount,
            cols : this.colsCount
        });
        this.state = {
            grid : this.engine.grid
        };
    }
    cellUpdateHandler(rowIndex, colIndex){
        this.engine.update(rowIndex, colIndex);
        this.setState({
            grid: this.engine.grid 
        });
    }
    render(){
        return (
            <div>
                <table className="table">
                    <thead>
                    </thead>
                    <tbody>
                        {this.state.grid.map((row, rowIndex) => {

                            return (
                                <tr key={rowIndex}>
                                    {
                                        row.map((col, colIndex) => {
                                            let clsName = col == GameOfLifeEngine.ALIVE_CELL ? 'alive-cell' : 'dead-cell'
                                            return(
                                                <td key={colIndex}>
                                                    <div className={clsName} onClick={this.cellUpdateHandler.bind(this, rowIndex, colIndex)}> </div>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={() => {
                    this.engine.nextGen();
                    this.setState({
                        grid: this.engine.grid 
                    });
                }} >Next Gen</button>
                <button onClick={() => {
                    this.timer = setInterval(() => {
                        this.engine.nextGen();
                        this.setState({
                            grid: this.engine.grid 
                        });
                    }, 1000);                  
                }} >Loop</button>
                <button onClick={() => {
                    clearInterval(this.timer);
                }} >Pause</button>
            </div>

        )
    }
}

export default GameOfLife;