var getRandom;
var getTotal=0;

$(document).ready(function(){
    $("button#roll-dice").click(function(){
        getRandom = Math.floor(Math.random()*6)+1;
        if(getRandom === 1)getTotal = 0;
        else if(getRandom !== 1)getTotal += getRandom;
        console.log("Random: "+getRandom+" Total: "+getTotal);
    });
});