class GameOfLifeEngine{
    constructor(opts){
        this.rowsCount = opts.rows || 10;
        this.colsCount = opts.cols || 10;
        this.grid = this.getEmptyGrid();
    }
    getEmptyGrid(){
        let emptyGrid = [];
        for(var rowIndex = 0; rowIndex < this.rowsCount; rowIndex ++){
            let row = [];
            for(var colIndex = 0; colIndex < this.colsCount; colIndex++){
                row.push(0);
            }
            emptyGrid.push(row);
        }
        return emptyGrid;
    }
    nextGen(){
        let nextGenGrid = this.getEmptyGrid();

        //get alive cells
        this.grid.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                nextGenGrid[rowIndex][colIndex] = col;
                let adjacentCells = this.getAdjacentCells(rowIndex, colIndex)
                let aliveAdjacentCells = adjacentCells.filter((cell) => {
                    return this.grid[cell[0]][cell[1]] == 1;
                })
                if(col == 0){
                    if(aliveAdjacentCells.length == 3){
                        nextGenGrid[rowIndex][colIndex] = 1;
                    }
                }
                else if (col == 1){
                    if(aliveAdjacentCells.length < 2 || aliveAdjacentCells.length > 3){
                        nextGenGrid[rowIndex][colIndex] = 0;
                    }
                }
                else{
                    console.log(`Err: ${row}:${col} neither zero nor one!`)
                }
            })
        });

        this.grid = nextGenGrid;
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
    // start(){
    //     //this.timer = setInterval(() => {
    //         this.nextGen();
    //     //}, 1000);
    //     //keep running logic, until pause or stop
    // }
    // pause(){
    //     //clearInterval(this.timer);
    // }

    update(rowIndex, colIndex){
        this.grid[rowIndex][colIndex] = this.grid[rowIndex][colIndex] == 1 ? 0 : 1;
    }

}

export default GameOfLifeEngine;