class GameOfLifeEngine{
    constructor(opts){
        this.rowsCount = opts.rows || 10;
        this.colsCount = opts.cols || 10;
        this.grid = [];
        this.setEmptyGrid();

    }
    setEmptyGrid(){
        this.grid = new Array(this.rowsCount);
        
        let row = new Array(this.colsCount)
        row.fill(0);
        
        this.grid.fill(row);
    }
    nextGen(){

    }
    getAdjacentCells(rowIndex, colIndex){
        let adjacentCellIndices = [];
        let isFirstRow = rowIndex == 0, 
        isFirstCol = colIndex == 0, 
        isLastRow = rowIndex == this.rowsCount - 1, 
        isLastCol = colIndex == this.colsCount - 1; 

        if(!isFirstCol){
            adjacentCellIndices.push([rowIndex, colIndex - 1]);
        }
        if(!isLastCol){
            adjacentCellIndices.push([rowIndex, colIndex + 1]);
        }
        if(!isFirstRow && !isLastCol){
            adjacentCellIndices.push([rowIndex - 1, colIndex - 1]);
        }
        if(!isFirstRow){
            adjacentCellIndices.push([rowIndex - 1, colIndex]);
        }
        if(!isFirstRow && !isLastCol){
            adjacentCellIndices.push([rowIndex - 1, colIndex + 1]);
        }
        if(!isLastRow && !isFirstCol){
            adjacentCellIndices.push([rowIndex + 1, colIndex - 1]);
        }
        if(!isLastRow){
            adjacentCellIndices.push([rowIndex + 1, colIndex]);
        }
        if(!isLastRow && !isLastCol){
            adjacentCellIndices.push([rowIndex + 1, colIndex + 1]);
        }

        return adjacentCellIndices;
    }
    start(){
        this.timer = setInterval(() => {
            this.nextGen();
        }, 1000);
        //keep running logic, until pause or stop
    }
    pause(){
        clearInterval(this.timer);
    }

    update(rowIndex, colIndex){
        //update state
        this.grid[rowIndex][colIndex] = this.grid[rowIndex][colIndex]  == 0 ? 1 : 0;
    }

}

export default GameOfLifeEngine;