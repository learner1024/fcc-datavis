import React, {Component} from 'react';
import GameOfLifeEngine from '../lib/GameOfLifeEngine.js';

class GameOfLife extends Component{
    constructor(props){
        super(props);
        this.rowsCount = 5;
        this.colsCount = 5;
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
                                            return(
                                                <td key={colIndex}>
                                                    <span onClick={this.cellUpdateHandler.bind(this, rowIndex, colIndex)}>{col}</span>
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
            </div>

        )
    }
}

export default GameOfLife;