class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.field = [];
        let fieldSize = 3;
        for (let i = 0; i < fieldSize; i++) {
            this.field[i] = [];
            for (let j = 0; j < fieldSize; j++) {
                this.field[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = this.currentSymbol == 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns() || false;
    }

    getWinner() {
        if (((this.field[0][0] == this.field[0][1] && this.field[0][1] == this.field[0][2]) ||
            (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2]) ||
            (this.field[0][0] == this.field[1][0] && this.field[1][0] == this.field[2][0]))
            && this.field[0][0])
            return this.field[0][0];
        if (((this.field[1][0] == this.field[1][1] && this.field[1][1] == this.field[1][2]) ||
            (this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0]) ||
            (this.field[0][1] == this.field[1][1] && this.field[1][1] == this.field[2][1]))
            && this.field[1][1])
            return this.field[1][1];
        if (((this.field[2][0] == this.field[2][1] && this.field[2][1] == this.field[2][2]) ||
            (this.field[0][1] == this.field[1][1] && this.field[1][1] == this.field[2][1])) 
            && this.field[2][1])
            return this.field[2][1];
        if ((this.field[0][2] == this.field[1][2] && this.field[1][2] == this.field[2][2])
            && this.field[0][2])
            return this.field[0][2];
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] == null){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && this.getWinner() == null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
