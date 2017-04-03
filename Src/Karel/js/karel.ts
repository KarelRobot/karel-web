/// <reference path="kareldrawer.ts" />
/// <reference path="moveaction.ts" />
/// <reference path="turnleftaction.ts" />
/// <reference path="direction.ts" />
/// <reference path="ikarelaction.ts" />
/// <reference path="world.ts" />
class Karel {
    row: number = 0;
    col: number = 0;
    world: World;
    direction: Direction = Direction.North;
    constructor(world: World) {

        this.world = world;
        this.col = 0;
        this.row = 0;
    }

    move() {
        var action = new MoveAction();
        this.executeAction(action);
    }
    turnLeft() {
        var action = new TurnLeftAction();
        this.executeAction(action);
    }
    executeAction(action: IKarelAction) {
        action.Execute(this);
    }
}

