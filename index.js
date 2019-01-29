const robot = require('robotjs');

robot.setMouseDelay(2);

var pi = Math.PI * 2;

var screen = robot.getScreenSize();
var height = (screen.height/10) - 10;
var width = screen.width;

const mouse = setInterval(function movement(){
    for(var x =0 ; x < width ; x++){
        y = height * Math.sin((pi * x) / width) + height;
        robot.moveMouse(x, y);
    
    }
},10); 