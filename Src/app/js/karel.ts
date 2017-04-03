
import World=require('./world');
import KarelActionsMod = require('./KarelActions');
import EntitiesMod = require('./Entities');
export class Karel {
    row: number = 0;
    col: number = 0;
    world: World.World;
    direction: EntitiesMod.Direction = EntitiesMod.Direction.North;
    constructor(world: World.World) {

        this.world = world;
        this.col = 0;
        this.row = 0;
    }

    move() {
        var action = new KarelActionsMod.MoveAction();
        this.executeAction(action);
    }
    turnLeft() {
        var action = new KarelActionsMod.TurnLeftAction();
        this.executeAction(action);
    }
    executeAction(action: KarelActionsMod.IKarelAction) {
        action.Execute(this);
    }
}

