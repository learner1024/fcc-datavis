import React, {Component} from 'react';
import GameOfLifeEngine from '../lib/GameOfLifeEngine.js';

class GameOfLife extends Component{
    constructor(props){
        super(props);
        this.rowsCount = 40;
        this.colsCount = 40;
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
                {this.state.grid.map((row, rowIndex) => {

                    return (
                        <div className='grid-row' key={rowIndex}>
                            {
                                row.map((col, colIndex) => {
                                    let clsName = col == GameOfLifeEngine.ALIVE_CELL ? 'cell alive-cell' : 'cell dead-cell'
                                    return(
                                        <div className={clsName} key={colIndex} onClick={this.cellUpdateHandler.bind(this, rowIndex, colIndex)}>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })}
                <br />
                
                <button onClick={() => {
                    this.engine.nextGen();
                    this.setState({
                        grid: this.engine.grid 
                    });
                }} >Next Gen</button>
                <button onClick={() => {
                    clearInterval(this.timer);
                    this.timer = setInterval(() => {
                        this.engine.nextGen();
                        this.setState({
                            grid: this.engine.grid 
                        });
                    }, 500);
                                      
                }} >Loop</button>
                <button onClick={() => {
                    clearInterval(this.timer);
                }} >Pause</button>
                <button onClick={() => {
                    if(this.timer){
                        clearInterval(this.timer);
                    }
                    this.engine.reset();
                    this.setState({
                        grid: this.engine.grid 
                    });
                }} >Clear</button>
                <span>Gen Count : {this.engine.genCount}</span>
            </div>
        )
    }
}

export default GameOfLife;