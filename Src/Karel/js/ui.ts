/// <reference path="karel.ts" />
/// <reference path="world.ts" />
/// <reference path="WorldDrawer.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
"use strict";
var karel: Karel;
var karelDrawer: KarelDrawer;
var world: World;
var worldDrawer: WorldDrawer;
$(document).ready(function () {
    var canvas = <HTMLCanvasElement>document.getElementById("world");
    world = new World();
    worldDrawer = new WorldDrawer(world, canvas);
    worldDrawer.draw();
    karel = new Karel(world);
    karelDrawer = new KarelDrawer(karel, canvas);
    karelDrawer.draw();
    loadAndSetStoredProgramsIfAny();
});
$("#back-button").click(function () {
    var program = $("#codeArea").val();
    executeProgram(program);
    saveProgram(program);
});
$("#turnLeft-button").click(function () {
    var program = "turnLeft();";
    executeProgram(program);
});
$("#move-button").click(function () {
    var program = "move();";
    executeProgram(program);
});
$("#draw-button").click(function () {
    worldDrawer.draw();
    karelDrawer.draw();
});
class KarelProgram {
    name: string;
    code: string;
}
function loadAndSetStoredProgramsIfAny() {
    var programs: Array<KarelProgram> = getStoredPrograms();
    $("#codeArea").text(programs[0].code);
}
function getStoredPrograms(): Array<KarelProgram> {
    var programs: Array<KarelProgram> = JSON.parse(localStorage.getItem("KarelPrograms") || "[]");
    if (!programs) {
        return [];
    } else {
        return programs;
    }
}
function saveProgram(program: string) {
    var programs: Array<KarelProgram> = [];
    programs.push({ name: "Untitled", code: program });
    saveProgramsToLocalStorage(programs);
}
function saveProgramsToLocalStorage(programs: Array<KarelProgram>) {
    localStorage.setItem("KarelPrograms",JSON.stringify(programs));
}
function executeProgram(program: string) {
    eval(program);
    setTimeout(() => {
        worldDrawer.draw();
        karelDrawer.draw();
    }, 1000);
}
function turnLeft() {
    karel.turnLeft();
}
function move() {
    karel.move();
}