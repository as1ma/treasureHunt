"use strict";
"use script";
class Treasure {
    constructor() {
        this.x = Math.ceil((Math.random() * 150) + 300);
        this.y = Math.ceil((Math.random() * 900));
    }
}
//get the mouse click
let screenLog = document.querySelector('#screen-log');
document.addEventListener('click', mouseClick);
let attempts = 0;
function mouseClick(e) {
    screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
    let cX = e.clientX;
    let cY = e.clientY;
    let distance = getDistance(e, treasureX, treasureY);
    if (distance > 700) {
        myAlert("Cold");
    }
    else if (distance < 700 && distance > 500) {
        myAlert("warm");
    }
    else if (distance < 500 && distance > 250) {
        myAlert("warmer");
    }
    else if (distance < 250 && distance > 100) {
        myAlert("Hot");
    }
    else if (distance < 100 && distance > 50) {
        myAlert("Hotter");
    }
    else if (distance < 50) {
        treasureBox.style.display = '';
        treasureBox.style.position = 'relative';
        treasureBox.style.left = treasureX + "px";
        treasureBox.style.top = treasureY + "px";
        myAlert(`You found the treasure chest! It took you ${attempts} attempts`);
        setTimeout(resetGame, 4000);
    }
    attempts += 1;
    // treasureBox.style.left = e.clientX + "px"
    // treasureBox.style.top = e.clientY + "px"
}
//hide the treasure chest 
let treasureBox = document.getElementById("treasure");
treasureBox.style.display = 'none';
let treasureX = Math.random() * window.innerWidth;
let treasureY = Math.random() * window.innerHeight;
treasureBox.style.left = treasureX + "px";
treasureBox.style.top = treasureY + "px";
//use pythagoras to find the distance between the chest and the mouseclick. a^^2 + b^^2 = c^^2
let getDistance = function (event, treasureX, treasureY) {
    var diffX = event.offsetX - treasureX;
    var diffY = event.offsetY - treasureY;
    let distance = Math.sqrt((diffX * diffX) + (diffY * diffY));
    return distance;
};
//output warmer/colder
function myAlert(msg) {
    let message = document.getElementById("message");
    message.innerHTML = msg;
}
//when found, output that and how many attemps (clicks) it took
function resetGame() {
    document.location.reload();
}
//# sourceMappingURL=script.js.map