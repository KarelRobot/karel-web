import KarelMod =require('./karel');
import EntitiesMod = require('./Entities');
var Direction = EntitiesMod.Direction;
export class KarelDrawer {
    private karel: KarelMod.Karel;
    private smallCircleRadius: number = 2;
    private largeCircleRadius: number = 5;
    private context: CanvasRenderingContext2D;
    constructor(karel: KarelMod.Karel, canvas: HTMLCanvasElement) {
        this.karel = karel;
        this.context = canvas.getContext("2d");
    }
    draw() {
        var cellCenter = this.karel.world.getCellCenter(this.karel.row, this.karel.col);
        if (this.karel.direction === undefined) {
            throw "Direction is empty";
        }
        switch (this.karel.direction) {
            case Direction.North:
                this.circle(this.context, cellCenter.x, cellCenter.y - this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y + this.largeCircleRadius, this.largeCircleRadius);
                break;
            case Direction.West:
                this.circle(this.context, cellCenter.x - this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x + this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
            case Direction.South:
                this.circle(this.context, cellCenter.x, cellCenter.y + this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y - this.largeCircleRadius, this.largeCircleRadius);
                break;
            case Direction.East:
                this.circle(this.context, cellCenter.x + this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x - this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
        }
    }
    private circle(context: CanvasRenderingContext2D, x: number, y: number, radius: number) {
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 1;
        context.arc(x, y, radius, 0, (Math.PI / 180) * 360, false);
        context.stroke();
        context.closePath();
    }
}