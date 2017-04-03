import KarelMod =require('./karel');
import EntitiesMod = require('./Entities');
var Direction = EntitiesMod.Direction;
export interface IKarelAction {
    Execute(karel:KarelMod.Karel);
}
export class TurnLeftAction implements IKarelAction {
    Execute(karel: KarelMod.Karel) {
        switch (karel.direction) {
            case Direction.North: karel.direction = Direction.West; break;
            case Direction.West: karel.direction = Direction.South; break;
            case Direction.South: karel.direction = Direction.East; break;
            case Direction.East: karel.direction = Direction.North; break;
        }
    }
} 
export class MoveAction implements IKarelAction{
    Execute(karel: KarelMod.Karel) {
        var worldSize = karel.world.getSize();
        switch (karel.direction) {
            case Direction.North:
                if (karel.row === 0) {
                    alert("cannot move");
                } else {
                    karel.row = karel.row - 1;
                }
                break;
            case Direction.West:
                if (karel.col === 0) {
                    alert("cannot move");
                } else {
                    karel.col = karel.col - 1;
                }
                break;
            case Direction.South:
                if (karel.row === worldSize.rows - 1) {
                    alert("cannot move");
                } else {
                    karel.row = karel.row + 1;
                }
                break;
            case Direction.East:
                if (karel.col === worldSize.cols - 1) {
                    alert("cannot move");
                } else {
                    karel.col = karel.col + 1;
                }
                break;
        }
    }
}