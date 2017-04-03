/// <reference path="boardsize.ts" />

class World {
    context: CanvasRenderingContext2D;
     boardWidth: number;
     boardHeight: number;
    private size: BoardSize;
    constructor() {
        this.size = { rows: 9, cols: 9 };
    }
    getSize() {
        return this.size;
    }
    //private getCellSize() {
    //    return { w: this.boardWidth / this.size.cols, h: this.boardHeight / this.size.rows };
    //}

    getCellCenter(row: number, col: number) {
        if (row === undefined || col === undefined) {
            throw "row or colum undefined";
        }
        var cellWidth = this.boardWidth / this.size.cols;
        var cellHeight = this.boardHeight / this.size.rows;
        return { x: (col * cellWidth) + (cellWidth / 2), y: (row * cellHeight) + (cellHeight / 2) };
    }
}