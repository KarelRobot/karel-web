class MoveAction implements IKarelAction{
    Execute(karel: Karel) {
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