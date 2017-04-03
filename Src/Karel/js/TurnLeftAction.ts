class TurnLeftAction implements IKarelAction {
    Execute(karel: Karel) {
        switch (karel.direction) {
            case Direction.North: karel.direction = Direction.West; break;
            case Direction.West: karel.direction = Direction.South; break;
            case Direction.South: karel.direction = Direction.East; break;
            case Direction.East: karel.direction = Direction.North; break;
        }
    }
} 