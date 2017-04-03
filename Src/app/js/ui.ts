"use strict";
import World=require('./world');
import WorldDrawer =require('./WorldDrawer'); 
import Karel =require('./karel');
import KarelDrawerMod = require('./KarelDrawer');
var worldDrawer: WorldDrawer.WorldDrawer;
import $ = require('jquery');
var karel: Karel.Karel;
var karelDrawer: KarelDrawerMod.KarelDrawer;

$(document).ready(function () {
    var canvas = <HTMLCanvasElement>document.getElementById("world");
    var world = new World.World();
    worldDrawer = new WorldDrawer.WorldDrawer(world, canvas);
    worldDrawer.draw();
    karel = new Karel.Karel(world);
    karelDrawer = new KarelDrawerMod.KarelDrawer(karel, canvas);
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
        return [getDefaultProgram()];
    } else {
        if(programs.length ===0) programs.push(getDefaultProgram());
        return programs;
    }
}
function getDefaultProgram():KarelProgram {
    return {name:"",code:""};
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