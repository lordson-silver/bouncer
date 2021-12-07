/*
A simple bouncer robot.
*/

var guestList = ["Silver", "Rukevwe", "Sage", "Victory", 
                "Fred", "Gege", "Yudi"];
var guestName = prompt("What is your name?")             
if(guestList.includes(guestName)){
    alert("Welcome " + guestName);
} else {
    alert("Sorry, I dont know you.");
};