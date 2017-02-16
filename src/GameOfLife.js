function GameOfLife(){
    var theGrid = createArray (15);
    var amountOfNeighbours = 0

    function createArray(rows) { //creates a 2 dimensional array of required height
        var arr = [];
        for (var i = 0; i < rows; i++) {
            arr[i] = [];
        }
        return arr;
    }
    this.countAmountOfNeighbours = function countAmountOfNeighbours(x,y){
        if(this.isCellAlive(x-1,y-1)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y-1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y-1)){ amountOfNeighbours++ };
        if(this.isCellAlive(x-1,y))  { amountOfNeighbours++ };
        if(this.isCellAlive((x+1),y)){ amountOfNeighbours++ };
        if(this.isCellAlive(x-1,y+1)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y+1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y+1)){ amountOfNeighbours++ };
    };

    this.checkForUnderPopulation = function (x,y){
        this.countAmountOfNeighbours(x,y);
        if (amountOfNeighbours<2){
            this.markCellAsDead(x,y);
        }
    };;

    this.checkForOverPopulation = function (x,y){
        this.countAmountOfNeighbours(x,y);
        if (amountOfNeighbours>=4){
            this.markCellAsDead(x,y);
        }
    };

    this.checkForReproduction =  function(x,y){
        this.countAmountOfNeighbours(x,y);
        if (amountOfNeighbours === 3){
            this.markCellAsAlive(x,y);
        };
    };

    this.isCellAlive = function (x, y){
        return theGrid[x][y];
    };

    this.markCellAsAlive = function (x, y){
        theGrid[x][y] = true;
    };
    this.markCellAsDead = function(x, y){
        theGrid[x][y] = false;
    };
};

